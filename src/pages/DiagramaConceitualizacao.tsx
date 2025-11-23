import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, Network, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const DiagramaConceitualizacao = () => {
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
            <h1 className="text-xl font-bold text-foreground">Diagrama de Conceitualização</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">
              Formulação de Caso TCC
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Diagrama de Conceitualização Cognitiva
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Mapeie a estrutura cognitiva do paciente desde a história de vida até aos comportamentos atuais
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5 text-primary" />
                O que é o Diagrama de Conceitualização?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                O Diagrama de Conceitualização Cognitiva é uma ferramenta fundamental na TCC que 
                ajuda a compreender como as experiências de vida, crenças nucleares, crenças 
                intermediárias e pensamentos automáticos se relacionam para influenciar emoções 
                e comportamentos.
              </p>
              <p className="text-muted-foreground">
                Este diagrama permite visualizar a formulação completa do caso, facilitando o 
                planeamento terapêutico e a identificação de pontos de intervenção.
              </p>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
          </div>

          <Card className="border-2 border-primary/30">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-lg">1. História de Vida Relevante e Precipitantes</CardTitle>
              <CardDescription>
                Experiências de vida significativas que moldaram as crenças nucleares
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <Textarea 
                placeholder="Descreva experiências relevantes da infância, eventos traumáticos, relacionamentos significativos, e fatores precipitantes atuais..."
                className="min-h-[150px]"
              />
              <p className="text-xs text-muted-foreground">
                Exemplos: Perdas, traumas, ambiente familiar, experiências escolares, eventos recentes que desencadearam sintomas
              </p>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
          </div>

          <Card className="border-2 border-primary/30">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-lg">2. Crenças Nucleares</CardTitle>
              <CardDescription>
                Crenças fundamentais sobre si próprio, os outros e o mundo
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Sobre si próprio</Label>
                  <Textarea 
                    placeholder="Ex: 'Sou incompetente', 'Sou indesejável'..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Sobre os outros</Label>
                  <Textarea 
                    placeholder="Ex: 'As pessoas são críticas', 'Ninguém é confiável'..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Sobre o mundo/futuro</Label>
                  <Textarea 
                    placeholder="Ex: 'O mundo é perigoso', 'O futuro é sem esperança'..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
          </div>

          <Card className="border-2 border-primary/30">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-lg">3. Crenças Intermediárias</CardTitle>
              <CardDescription>
                Regras, atitudes e pressupostos que derivam das crenças nucleares
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="font-medium">Regras</Label>
                  <p className="text-xs text-muted-foreground">Declarações do tipo "devo/tenho que..."</p>
                  <Textarea 
                    placeholder="Ex: 'Devo ser perfeito', 'Tenho que agradar a todos'..."
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-medium">Atitudes</Label>
                  <p className="text-xs text-muted-foreground">Crenças sobre como as coisas deveriam ser</p>
                  <Textarea 
                    placeholder="Ex: 'É terrível cometer erros', 'Ser rejeitado é insuportável'..."
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-medium">Pressupostos/Suposições</Label>
                  <p className="text-xs text-muted-foreground">Declarações do tipo "Se... então..."</p>
                  <Textarea 
                    placeholder="Ex: 'Se eu falhar, isso prova que sou incompetente', 'Se as pessoas me conhecerem, vão rejeitar-me'..."
                    className="min-h-[80px]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
          </div>

          <Card className="border-2 border-primary/30">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-lg">4. Estratégias de Enfrentamento</CardTitle>
              <CardDescription>
                Comportamentos desenvolvidos para lidar com as crenças
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Estratégias Adaptativas</Label>
                  <Textarea 
                    placeholder="Formas saudáveis de lidar com as crenças..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Estratégias Desadaptativas</Label>
                  <Textarea 
                    placeholder="Evitamento, procrastinação, comportamentos de segurança..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
          </div>

          <Card className="border-2 border-secondary/50">
            <CardHeader className="bg-secondary/5">
              <CardTitle className="text-lg">5. Situações Específicas</CardTitle>
              <CardDescription>
                Situações atuais que ativam as crenças e geram reações
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Textarea 
                placeholder="Descreva situações específicas recentes que desencadearam reações emocionais ou comportamentais..."
                className="min-h-[100px]"
              />
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">6. Pensamentos Automáticos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Textarea 
                  placeholder="Liste os pensamentos que surgiram na situação..."
                  className="min-h-[120px]"
                />
                <div className="space-y-2 pt-2">
                  <Label className="text-sm">Significado (Crença Nuclear ativada)</Label>
                  <Input placeholder="O que este pensamento significa sobre si?" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">7. Emoções</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  placeholder="Que emoções foram experienciadas?"
                  className="min-h-[120px]"
                />
                <div className="space-y-2">
                  <Label className="text-sm">Intensidade (0-100)</Label>
                  <Input type="number" min="0" max="100" placeholder="0" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">8. Comportamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea 
                  placeholder="Como reagiu? Que comportamentos teve?"
                  className="min-h-[180px]"
                />
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/30 border-2 border-primary">
            <CardHeader>
              <CardTitle>Análise e Plano Terapêutico</CardTitle>
              <CardDescription>
                Com base no diagrama completo, que intervenções seriam mais adequadas?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Pontos-chave para intervenção</Label>
                <Textarea 
                  placeholder="Identifique os níveis cognitivos a trabalhar prioritariamente..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Estratégias terapêuticas sugeridas</Label>
                <Textarea 
                  placeholder="Técnicas e abordagens recomendadas..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button className="flex-1">Guardar Diagrama</Button>
            <Button variant="outline" className="flex-1">Imprimir</Button>
            <Button variant="outline" className="flex-1">Novo Diagrama</Button>
          </div>

          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground text-center">
                Baseado em: Beck, J. S. (2022). Terapia Cognitivo-Comportamental: Teoria e Prática (3ª ed.). 
                Porto Alegre: Artmed, p. 46, 49.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DiagramaConceitualizacao;