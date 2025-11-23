import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Home, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const AdvogadoDefesa = () => {
  const [pronto, setPronto] = useState<string>("");

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
            <h1 className="text-xl font-bold text-foreground">Advogado de Defesa</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">
              Técnica de Reestruturação Cognitiva
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Atuando como o seu Próprio Advogado de Defesa
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Defenda-se contra pensamentos negativos como se estivesse num tribunal
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                Sobre este Exercício
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Frequentemente, costumamos avaliar-nos de forma crítica, sem nos esforçarmos para 
                nos defender contra os nossos pensamentos negativos. Neste exercício, assumirá o 
                papel de um advogado que está a defender as suas posições contra "acusações" 
                negativas ou críticas direcionadas a si.
              </p>
              <p className="text-muted-foreground">
                Responda às questões apresentadas e avalie se está a ser excessivamente crítico(a) 
                consigo mesmo(a).
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="text-lg">Abertura do Julgamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label className="text-base">Está pronto(a) para se defender dos pensamentos negativos?</Label>
                <RadioGroup value={pronto} onValueChange={setPronto}>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="sim" />
                      <Label htmlFor="sim" className="cursor-pointer">SIM</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="nao" />
                      <Label htmlFor="nao" className="cursor-pointer">NÃO</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label className="text-base">Qual é a acusação (pensamento negativo)?</Label>
                <Textarea 
                  placeholder="Descreva o pensamento negativo ou autocrítica..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base">Como essa acusação afeta as suas emoções?</Label>
                <Textarea 
                  placeholder="Descreva as emoções geradas por este pensamento..."
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base">Avalie a intensidade numa escala de 0 a 10</Label>
                <div className="flex items-center gap-4">
                  <Input 
                    type="number" 
                    min="0" 
                    max="10" 
                    placeholder="0"
                    className="max-w-[100px]"
                  />
                  <span className="text-muted-foreground">/ 10</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-destructive/5 border-destructive/20">
              <CardHeader>
                <CardTitle className="text-lg">Acusação (Promotor)</CardTitle>
                <CardDescription>
                  Evidências que apoiam o pensamento negativo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Quais são as evidências concretas que apoiam essa acusação?</Label>
                  <Textarea 
                    placeholder="Liste as evidências..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>De que maneira as suas experiências respaldam esse pensamento negativo?</Label>
                  <Textarea 
                    placeholder="Descreva experiências relacionadas..."
                    className="min-h-[120px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="text-lg">Interrogatório Inicial</CardTitle>
                <CardDescription>
                  Questione as evidências apresentadas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Existem outras interpretações possíveis para os eventos mencionados?</Label>
                  <Textarea 
                    placeholder="Explore interpretações alternativas..."
                    className="min-h-[260px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Advogado de Defesa</CardTitle>
                <CardDescription>
                  Evidências que contradizem a acusação
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Quais são as evidências que contradizem essa acusação?</Label>
                  <Textarea 
                    placeholder="Liste evidências contra a acusação..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Que experiências ou qualidades suas desafiam este pensamento?</Label>
                  <Textarea 
                    placeholder="Identifique os seus pontos fortes..."
                    className="min-h-[120px]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Júri</CardTitle>
              <CardDescription>
                Como outras pessoas objetivas interpretariam esta situação?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-base">Como um júri interpretaria estas evidências?</Label>
                <Textarea 
                  placeholder="Imagine a perspetiva de pessoas imparciais e justas..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base">Até que ponto um júri o(a) condenaria ou puniria tão severamente quanto se pune a si próprio(a)?</Label>
                <p className="text-sm text-muted-foreground">Avalie numa escala de 0 a 10</p>
                <div className="flex items-center gap-4">
                  <Input 
                    type="number" 
                    min="0" 
                    max="10" 
                    placeholder="0"
                    className="max-w-[100px]"
                  />
                  <span className="text-muted-foreground">/ 10</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Scale className="h-6 w-6 text-primary" />
                Veredito
              </CardTitle>
              <CardDescription>
                Com base nas evidências apresentadas, qual seria um pensamento mais adaptativo?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                placeholder="Escreva uma conclusão mais equilibrada e justa sobre si próprio(a)..."
                className="min-h-[150px]"
              />
              <div className="p-4 bg-background/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Reflexão:</strong> Como se sente após defender-se? Que diferenças nota 
                  entre a "acusação" inicial e este veredito mais equilibrado?
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button className="flex-1">Guardar Exercício</Button>
            <Button variant="outline" className="flex-1">Novo Julgamento</Button>
          </div>

          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground text-center">
                Baseado em: Leahy, R. L. (2019). Técnicas de Terapia Cognitiva: Manual do Terapeuta (2ª ed.). 
                Porto Alegre: Artmed, p. 87-88.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdvogadoDefesa;