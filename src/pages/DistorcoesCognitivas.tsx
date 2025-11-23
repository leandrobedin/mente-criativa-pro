import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import PrintHeader from "@/components/PrintHeader";
import { Lightbulb } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface DistorcaoReflexao {
  exemplo: string;
  desafio: string;
}

const DistorcoesCognitivas = () => {
  const [reflexoes, setReflexoes] = useState<{[key: string]: DistorcaoReflexao}>({
    catastrofizacao: { exemplo: "", desafio: "" },
    tudoOuNada: { exemplo: "", desafio: "" },
    conclusoesPrecipitadas: { exemplo: "", desafio: "" },
    filtroMental: { exemplo: "", desafio: "" },
    raciocinioEmocional: { exemplo: "", desafio: "" },
    personalizacao: { exemplo: "", desafio: "" },
    deveria: { exemplo: "", desafio: "" }
  });

  const handleChange = (distorcao: string, field: 'exemplo' | 'desafio', value: string) => {
    setReflexoes(prev => ({
      ...prev,
      [distorcao]: { ...prev[distorcao], [field]: value }
    }));
  };

  const handleSave = () => {
    toast.success("Reflexões guardadas com sucesso!");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <PrintHeader title="Identificando Distorções Cognitivas e Reformulando" />
        
        <div className="print:hidden">
          <Button variant="outline" onClick={() => window.history.back()} className="mb-4">
            ← Voltar
          </Button>
        </div>

        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-2xl md:text-3xl">Distorções Cognitivas</CardTitle>
                <CardDescription className="text-base mt-2">
                  Identificar e reformular padrões de pensamento disfuncionais
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              As distorções cognitivas são padrões de pensamento automáticos e imprecisos que podem 
              amplificar a ansiedade. Aprender a identificá-las e desafiá-las é fundamental para o 
              bem-estar emocional.
            </p>

            {/* Catastrofização */}
            <section className="bg-muted/30 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">🌪️ Catastrofização</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Pensar que o pior vai acontecer, imaginando sempre o pior desfecho de uma situação. 
                  É como "fazer tempestade num copo de água" e imaginar que não conseguirá suportar.
                </p>
                <div className="bg-primary/5 rounded p-3 mb-4">
                  <p className="text-sm font-medium mb-2">💭 Perguntas para desafiar:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>O que mais pode acontecer?</li>
                    <li>Que possibilidades não estou a considerar?</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <Label>Exemplo pessoal de catastrofização:</Label>
                <Textarea
                  value={reflexoes.catastrofizacao.exemplo}
                  onChange={(e) => handleChange('catastrofizacao', 'exemplo', e.target.value)}
                  placeholder="Descreva uma situação em que catastrofizou..."
                  className="min-h-[80px]"
                />
              </div>
              <div className="space-y-3">
                <Label>Como posso desafiar este pensamento?</Label>
                <Textarea
                  value={reflexoes.catastrofizacao.desafio}
                  onChange={(e) => handleChange('catastrofizacao', 'desafio', e.target.value)}
                  placeholder="Que evidências tenho de que o pior não vai acontecer?"
                  className="min-h-[80px]"
                />
              </div>
            </section>

            {/* Pensamento Tudo ou Nada */}
            <section className="bg-muted/30 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">⚫⚪ Pensamento Tudo ou Nada</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ver apenas um extremo ou outro. Está errado ou certo, algo é bom ou mau. Não existe 
                  meio-termo ou tons de cinza.
                </p>
                <div className="bg-primary/5 rounded p-3 mb-4">
                  <p className="text-sm font-medium mb-2">💭 Perguntas para desafiar:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>As coisas são 100% boas ou más?</li>
                    <li>Que possibilidades estou a desconsiderar quando vejo as coisas em tudo ou nada?</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <Label>Exemplo pessoal de pensamento tudo ou nada:</Label>
                <Textarea
                  value={reflexoes.tudoOuNada.exemplo}
                  onChange={(e) => handleChange('tudoOuNada', 'exemplo', e.target.value)}
                  placeholder="Descreva um pensamento em preto e branco..."
                  className="min-h-[80px]"
                />
              </div>
              <div className="space-y-3">
                <Label>Perspetiva mais equilibrada:</Label>
                <Textarea
                  value={reflexoes.tudoOuNada.desafio}
                  onChange={(e) => handleChange('tudoOuNada', 'desafio', e.target.value)}
                  placeholder="Como posso ver esta situação de forma mais equilibrada?"
                  className="min-h-[80px]"
                />
              </div>
            </section>

            {/* Conclusões Precipitadas */}
            <section className="bg-muted/30 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">🔮 Conclusões Precipitadas</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Tirar conclusões precipitadas quando assumimos que sabemos o que outra pessoa está a pensar 
                  (leitura da mente) ou quando fazemos previsões sobre o futuro (adivinhação).
                </p>
                <div className="bg-primary/5 rounded p-3 mb-4">
                  <p className="text-sm font-medium mb-2">💭 Perguntas para desafiar:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Que factos comprovam que a minha conclusão está correta?</li>
                    <li>Posso mesmo saber o que as pessoas estão a pensar, sem que me contem?</li>
                    <li>Por que não perguntar à pessoa em vez de tentar adivinhar?</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <Label>Exemplo pessoal de conclusão precipitada:</Label>
                <Textarea
                  value={reflexoes.conclusoesPrecipitadas.exemplo}
                  onChange={(e) => handleChange('conclusoesPrecipitadas', 'exemplo', e.target.value)}
                  placeholder="Quando tirou uma conclusão sem ter certeza?"
                  className="min-h-[80px]"
                />
              </div>
              <div className="space-y-3">
                <Label>Que factos tenho realmente?</Label>
                <Textarea
                  value={reflexoes.conclusoesPrecipitadas.desafio}
                  onChange={(e) => handleChange('conclusoesPrecipitadas', 'desafio', e.target.value)}
                  placeholder="Que evidências concretas tenho?"
                  className="min-h-[80px]"
                />
              </div>
            </section>

            {/* Filtro Mental */}
            <section className="bg-muted/30 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">🔍 Filtro Mental</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Focar nas partes negativas de uma situação e esquecer as partes positivas. É como olhar 
                  para um lindo quadro colorido, mas focar apenas numa avaria na moldura.
                </p>
                <div className="bg-primary/5 rounded p-3 mb-4">
                  <p className="text-sm font-medium mb-2">💭 Perguntas para desafiar:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>O que não estou a considerar?</li>
                    <li>O que está a acontecer de positivo?</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <Label>Exemplo de filtro mental:</Label>
                <Textarea
                  value={reflexoes.filtroMental.exemplo}
                  onChange={(e) => handleChange('filtroMental', 'exemplo', e.target.value)}
                  placeholder="Quando focou apenas no negativo?"
                  className="min-h-[80px]"
                />
              </div>
              <div className="space-y-3">
                <Label>Aspetos positivos que ignorei:</Label>
                <Textarea
                  value={reflexoes.filtroMental.desafio}
                  onChange={(e) => handleChange('filtroMental', 'desafio', e.target.value)}
                  placeholder="Que aspetos positivos existem nesta situação?"
                  className="min-h-[80px]"
                />
              </div>
            </section>

            {/* Raciocínio Emocional */}
            <section className="bg-muted/30 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">❤️ Raciocínio Emocional</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Interpretar o que está a acontecer de acordo com o estado de humor, ou seja, basear a 
                  visão das situações ou de si mesmo na maneira como se está a sentir.
                </p>
                <div className="bg-primary/5 rounded p-3 mb-4">
                  <p className="text-sm font-medium mb-2">💭 Perguntas para desafiar:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Existe outra explicação para o que estou a sentir?</li>
                    <li>Quais são as evidências de que os meus julgamentos são 100% verdadeiros?</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <Label>Exemplo de raciocínio emocional:</Label>
                <Textarea
                  value={reflexoes.raciocinioEmocional.exemplo}
                  onChange={(e) => handleChange('raciocinioEmocional', 'exemplo', e.target.value)}
                  placeholder="Quando julgou uma situação baseado nas emoções?"
                  className="min-h-[80px]"
                />
              </div>
              <div className="space-y-3">
                <Label>Perspetiva mais objetiva:</Label>
                <Textarea
                  value={reflexoes.raciocinioEmocional.desafio}
                  onChange={(e) => handleChange('raciocinioEmocional', 'desafio', e.target.value)}
                  placeholder="Se não estivesse a sentir isto, como veria a situação?"
                  className="min-h-[80px]"
                />
              </div>
            </section>

            {/* Personalização */}
            <section className="bg-muted/30 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">👤 Personalização</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Culpar-se por tudo que corre mal ou pode correr mal, mesmo quando pode ser apenas 
                  parcialmente responsável ou não ser responsável.
                </p>
                <div className="bg-primary/5 rounded p-3 mb-4">
                  <p className="text-sm font-medium mb-2">💭 Perguntas para desafiar:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Sou mesmo 100% responsável por isto?</li>
                    <li>Com quem devo dividir, mesmo que parcialmente, esta responsabilidade?</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <Label>Exemplo de personalização:</Label>
                <Textarea
                  value={reflexoes.personalizacao.exemplo}
                  onChange={(e) => handleChange('personalizacao', 'exemplo', e.target.value)}
                  placeholder="Quando se culpou por algo que não controlava totalmente?"
                  className="min-h-[80px]"
                />
              </div>
              <div className="space-y-3">
                <Label>Distribuição real de responsabilidade:</Label>
                <Textarea
                  value={reflexoes.personalizacao.desafio}
                  onChange={(e) => handleChange('personalizacao', 'desafio', e.target.value)}
                  placeholder="Que fatores externos ou outras pessoas também contribuíram?"
                  className="min-h-[80px]"
                />
              </div>
            </section>

            {/* Declarações "Deveria" */}
            <section className="bg-muted/30 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">📏 Declarações "Deveria"</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Julgar-se e criticar-se pelo que deveria estar a fazer. São regras rígidas que define 
                  para si mesmo e para os outros sem considerar as particularidades de cada circunstância.
                </p>
                <div className="bg-primary/5 rounded p-3 mb-4">
                  <p className="text-sm font-medium mb-2">💭 Perguntas para desafiar:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Estou a desconsiderar fatores que não estão no meu controle?</li>
                    <li>Estas declarações ajudam-me a motivar ou só me frustram quando não as alcanço?</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <Label>Exemplo de pensamento "deveria":</Label>
                <Textarea
                  value={reflexoes.deveria.exemplo}
                  onChange={(e) => handleChange('deveria', 'exemplo', e.target.value)}
                  placeholder="Que 'deverias' se impõe?"
                  className="min-h-[80px]"
                />
              </div>
              <div className="space-y-3">
                <Label>Alternativa mais flexível:</Label>
                <Textarea
                  value={reflexoes.deveria.desafio}
                  onChange={(e) => handleChange('deveria', 'desafio', e.target.value)}
                  placeholder="Como posso reformular de forma mais realista e compassiva?"
                  className="min-h-[80px]"
                />
              </div>
            </section>

            <div className="flex gap-4 justify-end print:hidden pt-6">
              <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                💾 Guardar Reflexões
              </Button>
              <Button onClick={handlePrint} variant="outline">
                🖨️ Imprimir
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DistorcoesCognitivas;
