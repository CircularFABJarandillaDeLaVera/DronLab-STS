"""Comprueba bancos, concordancia de datos y enlaces del curso STS sin dependencias externas."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json, math, re
ROOT = Path(__file__).resolve().parents[1]
def read(path):
    return json.loads((ROOT / path).read_text(encoding='utf-8-sig'))
class Links(HTMLParser):
    def __init__(self):
        super().__init__(); self.targets=[]; self.ids=set()
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.add(a['id'])
        for k in ('href','src'):
            if a.get(k):self.targets.append(a[k])
ids=set(); questions=0; files=0
for n in range(1,9):
    base=f'bloques/bloque{n}'
    d=read(f'{base}/data/bloque{n}.json')
    raw=(ROOT/f'{base}/data/bloque{n}.js').read_text(encoding='utf-8-sig')
    assert json.loads(raw.split('=',1)[1].strip().removesuffix(';'))==d, f'Datos JS/JSON divergentes B{n}'
    assert len(d['pantallas'])==8
    for resource,key in [('test','preguntas'),('flashcards','flashcards'),('casos','casos'),('practicas','practicas')]:
        file=f'{base}/recursos/{resource}/{resource}.json'
        bank=read(file);items=bank[key];assert bank['total']==len(items),file
        if key=='flashcards':assert len(items)==20
        for item in items:
            assert item['id'] not in ids, item['id'];ids.add(item['id'])
            assert item.get('fuentes'), f'Sin fuente: {item["id"]}'
            if key=='preguntas':
                assert len(item['respuestas'])==4
                assert len(set(item['respuestas']))==4
                assert type(item['respuesta_correcta']) is int and 0<=item['respuesta_correcta']<4
                assert item['explicacion'] and item['error_habitual']
                if 'explicaciones_opciones' in item:assert len(item['explicaciones_opciones'])==4
                questions+=1
            if key=='casos':assert item['solucion_razonada'] and item['criterios_evaluacion']
            if key=='practicas':assert item['resultado_esperado'] and item['criterios_de_exito']
        files+=1
# Los casos límite protegen las distinciones que motivaron este refuerzo.
b8=read('bloques/bloque8/recursos/test/test.json')['preguntas']
def correct(qid, qs):
    q=next(q for q in qs if q['id']==qid);return q['respuestas'][q['respuesta_correcta']]
assert correct('B8-R26-004',b8)=='45 m más allá de la zona de contingencia.'
assert correct('B8-R26-003',b8)=='25 m en el ejemplo unidimensional.'
b7=read('bloques/bloque7/recursos/test/test.json')['preguntas']
assert correct('B7-R26-003',b7)=='25 kg.'
assert math.isclose(100*.25/1,25)
assert math.isclose(22.2*5,111)
assert math.ceil(30*.75)==23
for config_name,number,minutes,count in [('exam-config.json',40,40,8),('exam-config-a2.json',30,30,5)]:
    c=read('examen-final/'+config_name)
    assert c['exam']['question_count']==number and c['exam']['time_minutes']==minutes
    assert c['exam']['pass_correct']==math.ceil(number*c['exam']['pass_percent']/100)
    assert len(c['question_banks'])==count
    for bank in c['question_banks']:
        assert (ROOT/'examen-final'/bank['url']).resolve().exists()
    assert math.isclose(sum(c['selection']['block_distribution'].values()),1)
# Comprobar destinos locales de todas las páginas, incluidos recursos y scripts compartidos.
errors=[]
for p in ROOT.rglob('*.html'):
    parser=Links();parser.feed(p.read_text(encoding='utf-8-sig'))
    for target in parser.targets:
        u=urlsplit(target)
        if u.scheme or u.netloc or not u.path:continue
        dest=(p.parent/unquote(u.path)).resolve()
        if not dest.exists():errors.append(f'{p.relative_to(ROOT)} -> {target}')
assert not errors, '\n'.join(errors)
# Ningún régimen excluido debe sobrevivir dentro del material servido al alumno.
for p in (ROOT/'bloques').rglob('*'):
    if p.suffix in {'.html','.js','.json','.md'}:
        text=p.read_text(encoding='utf-8-sig')
        assert not re.search(r'STS-ES|1036/2017|MME8|MMT9|MAE22|MAT16',text), str(p)
print(f'OK: {questions} preguntas, {files} bancos, IDs únicos, JS/JSON concordantes, dos vías de simulacro y enlaces locales sin fallos.')
