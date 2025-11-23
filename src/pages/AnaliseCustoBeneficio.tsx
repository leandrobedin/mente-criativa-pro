import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, TrendingUp, TrendingDown, Equal } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const AnaliseCustoBeneficio = () => {
  const [custos, setCustos] = useState<number>(0);
  const [beneficios, setBeneficios] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-foreground">Análise Custo-Benefício</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">
              Técnica de Avaliação Cognitiva
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Análise de Custo-Benefício de um Pensamento
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Avalie objetivamente as vantagens e desvantagens de manter uma crença ou pensamento
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sobre esta Técnica</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                A análise de custo-benefício é uma ferramenta que permite avaliar de forma objetiva 
                os custos e benefícios de manter um determinado pensamento ou crença. Esta técnica 
                ajuda a identificar se um pensamento é realmente útil ou se está a criar mais 
                problemas do que soluções.
              </p>
              <p className="text-muted-foreground">
                Após listar os custos e benefícios, deve assinalar os mais significativos e refletir 
                sobre por que são importantes. Pode também desafiar a sua visão e considerar crenças 
                alternativas mais adaptativas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pensamento Negativo a Analisar</CardTitle>
              <CardDescription>
                Identifique o pensamento ou crença que gostaria de avaliar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="Escreva o pensamento negativo que gostaria de analisar..."
                className="min-h-[100px]"
              />
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingDown className="h-5 w-5 text-destructive" />
                  Desvantagens
                </CardTitle>
                <CardDescription>
                  Quais são os custos ou consequências negativas deste pensamento?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Textarea 
                  placeholder="Liste todas as desvantagens de manter este pensamento..."
                  className="min-h-[300px]"
                />
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-2">
                    Exemplos de desvantagens:
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Impacto no humor e bem-estar emocional</li>
                    <li>Limitação de oportunidades ou comportamentos</li>
                    <li>Efeito nos relacionamentos</li>
                    <li>Interferência nos objetivos pessoais</li>
                    <li>Stress e ansiedade gerados</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Vantagens
                </CardTitle>
                <CardDescription>
                  Existem benefícios ou vantagens em manter este pensamento?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Textarea 
                  placeholder="Liste quaisquer vantagens percebidas deste pensamento..."
                  className="min-h-[300px]"
                />
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-2">
                    Exemplos de vantagens:
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Sensação de proteção ou segurança</li>
                    <li>Evitar responsabilidades ou riscos</li>
                    <li>Manter o status quo</li>
                    <li>Justificar comportamentos atuais</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Avaliação dos Mais Significativos</CardTitle>
              <CardDescription>
                Identifique os custos e benefícios mais importantes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Quais são os custos mais significativos?</Label>
                <Textarea 
                  placeholder="Liste e explique por que estes custos são importantes para si..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Quais são os benefícios mais significativos?</Label>
                <Textarea 
                  placeholder="Liste e explique por que estes benefícios são importantes para si..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Poderia desafiar a importância destes custos ou benefícios?</Label>
                <Textarea 
                  placeholder="Reflita sobre se está a supervalorizar alguns aspetos..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Equal className="h-5 w-5" />
                Resultado da Análise
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Pontuação dos Custos</Label>
                  <p className="text-xs text-muted-foreground mb-2">
                    0 = Sem custos | 100 = Custos extremos
                  </p>
                  <Input 
                    type="number" 
                    min="0" 
                    max="100"
                    value={custos}
                    onChange={(e) => setCustos(Number(e.target.value))}
                    placeholder="0" 
                  />
                </div>

                <div className="space-y-2">
                  <Label>Pontuação dos Benefícios</Label>
                  <p className="text-xs text-muted-foreground mb-2">
                    0 = Sem benefícios | 100 = Benefícios extremos
                  </p>
                  <Input 
                    type="number" 
                    min="0" 
                    max="100"
                    value={beneficios}
                    onChange={(e) => setBeneficios(Number(e.target.value))}
                    placeholder="0" 
                  />
                </div>

                <div className="space-y-2">
                  <Label>Diferença (Custos - Benefícios)</Label>
                  <div className="h-10 flex items-center justify-center bg-background rounded-md border px-3">
                    <span className={`text-lg font-bold ${
                      custos - beneficios > 0 ? 'text-destructive' : 
                      custos - beneficios < 0 ? 'text-primary' : 
                      'text-muted-foreground'
                    }`}>
                      {custos - beneficios}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {custos - beneficios > 0 && "Os custos superam os benefícios"}
                    {custos - beneficios < 0 && "Os benefícios superam os custos"}
                    {custos - beneficios === 0 && "Custos e benefícios equilibrados"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Crença Alternativa</CardTitle>
              <CardDescription>
                Com base na análise, qual seria uma crença mais adaptativa?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                placeholder="Formule uma crença alternativa mais equilibrada e útil..."
                className="min-h-[100px]"
              />

              <div className="space-y-2">
                <Label>Análise de custo-benefício da crença alternativa:</Label>
                <Textarea 
                  placeholder="Como os custos e benefícios se comparam com a crença original?"
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardHeader>
              <CardTitle>Conclusão</CardTitle>
              <CardDescription>
                Resumo e decisão sobre o pensamento analisado
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                placeholder="Com base nesta análise, que conclusões pode tirar? Vale a pena manter este pensamento ou seria melhor adotar a crença alternativa?"
                className="min-h-[120px]"
              />
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button className="flex-1">Guardar Análise</Button>
            <Button variant="outline" className="flex-1">Nova Análise</Button>
          </div>

          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground text-center">
                Baseado em: Leahy, R. L. (2019). Técnicas de Terapia Cognitiva: Manual do Terapeuta (2ª ed.). 
                Porto Alegre: Artmed, p. 83.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AnaliseCustoBeneficio;