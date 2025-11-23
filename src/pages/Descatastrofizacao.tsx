import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Descatastrofizacao = () => {
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
            <h1 className="text-xl font-bold text-foreground">Descatastrofização</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">
              Técnica TCC
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Perguntas para Descatastrofizar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Questione pensamentos catastróficos e avalie realisticamente probabilidades e recursos
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                O que é a Descatastrofização?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                A descatastrofização é uma técnica cognitiva que ajuda a questionar pensamentos 
                catastróficos e a avaliar de forma mais realista a probabilidade e o impacto de 
                eventos temidos. Esta abordagem permite desenvolver planos de ação e reconhecer 
                recursos pessoais para lidar com situações difíceis.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Identificação do Medo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-base">1. Qual é o seu maior medo?</Label>
                <Textarea 
                  placeholder="Descreva o medo que gostaria de explorar..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base">2. Qual é o pior cenário que pode imaginar em relação a esta situação?</Label>
                <Textarea 
                  placeholder="Descreva detalhadamente o pior cenário..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Avaliação de Evidências</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-base">3. Quais são as evidências de que essa catástrofe realmente ocorrerá?</Label>
                <Textarea 
                  placeholder="Liste as evidências concretas..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base">4. Já enfrentou situações semelhantes no passado? Como lidou com elas?</Label>
                <Textarea 
                  placeholder="Descreva experiências anteriores e como as resolveu..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base">5. Qual é a probabilidade realista de que o pior cenário realmente aconteça?</Label>
                <p className="text-sm text-muted-foreground">Avalie numa escala de 0 a 100%</p>
                <div className="flex items-center gap-4">
                  <Input 
                    type="number" 
                    min="0" 
                    max="100" 
                    placeholder="0"
                    className="max-w-[100px]"
                  />
                  <span className="text-muted-foreground">%</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-base">6. Quantas vezes previu que isso aconteceria? Quantas vezes isso realmente aconteceu?</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm">Vezes que previu</Label>
                    <Input type="number" min="0" placeholder="0" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">Vezes que aconteceu</Label>
                    <Input type="number" min="0" placeholder="0" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recursos e Apoio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-base">7. Tem amigos a quem poderia recorrer ou pedir ajuda?</Label>
                <Textarea 
                  placeholder="Liste as pessoas e recursos de apoio disponíveis..."
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base">8. Existem evidências de que é capaz de lidar com isso?</Label>
                <p className="text-sm text-muted-foreground">(exceto se o seu medo for de morrer)</p>
                <Textarea 
                  placeholder="Liste as suas capacidades e recursos internos..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base">9. Quais estratégias ou recursos pode utilizar para enfrentar esse medo?</Label>
                <Textarea 
                  placeholder="Identifique estratégias práticas de enfrentamento..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cenários Alternativos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-base">10. O que de melhor poderia acontecer?</Label>
                <Textarea 
                  placeholder="Descreva o melhor cenário possível..."
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base">11. O que provavelmente vai acontecer? Qual é o desfecho mais realista?</Label>
                <Textarea 
                  placeholder="Descreva o cenário mais provável e equilibrado..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardHeader>
              <CardTitle>Conclusão e Plano de Ação</CardTitle>
              <CardDescription>
                Após refletir sobre estas questões, que conclusões pode tirar?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                placeholder="Resuma as suas conclusões e elabore um plano de ação realista..."
                className="min-h-[120px]"
              />
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button className="flex-1">Guardar Exercício</Button>
            <Button variant="outline" className="flex-1">Novo Exercício</Button>
          </div>

          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground text-center">
                Baseado em: Beck, J. S. (2022). Terapia Cognitivo-Comportamental: Teoria e Prática (3ª ed.). 
                Porto Alegre: Artmed, p. 242-243.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Descatastrofizacao;