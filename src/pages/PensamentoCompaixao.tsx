import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const PensamentoCompaixao = () => {
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
            <h1 className="text-xl font-bold text-foreground">Pensamento Compassivo</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">
              Terapia Focada na Compaixão
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Desenvolvendo um Pensamento Compassivo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cultive a autocompaixão e transforme a autocrítica em compreensão gentil
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                O que é a Terapia Focada na Compaixão?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                A Terapia Focada na Compaixão (CFT) é uma abordagem terapêutica que ajuda as pessoas 
                a desenvolverem compaixão por si mesmas e pelos outros. Muitas vezes, somos o nosso 
                crítico mais severo, e esta técnica ensina-nos a tratar-nos com a mesma gentileza 
                que oferecemos a um amigo querido.
              </p>
              <p className="text-muted-foreground">
                Este exercício ajuda a identificar momentos de autocrítica e a desenvolver respostas 
                mais compassivas e equilibradas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Situação</CardTitle>
              <CardDescription>
                Identifique o momento em que a autocrítica surgiu
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-base">Em quais momentos percebe a ausência de compaixão por si mesmo?</Label>
                <Textarea 
                  placeholder="Descreva a situação específica em que foi duro(a) consigo próprio(a)..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pensamento Autocrítico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-base">Quais autocríticas e padrões de pensamento negativos identifica em si mesmo?</Label>
                <Textarea 
                  placeholder="Liste os pensamentos críticos que teve sobre si próprio(a)..."
                  className="min-h-[120px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Emoção</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-base">Como a autocrítica afeta as suas emoções?</Label>
                <Textarea 
                  placeholder="Descreva como se sentiu ao ter estes pensamentos..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base">Na sua perceção, qual seria a intensidade desse sentimento?</Label>
                <p className="text-sm text-muted-foreground">Avalie numa escala de 0 a 100</p>
                <div className="flex items-center gap-4">
                  <Input 
                    type="number" 
                    min="0" 
                    max="100" 
                    placeholder="0"
                    className="max-w-[100px]"
                  />
                  <span className="text-muted-foreground">/ 100</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardHeader>
              <CardTitle className="text-lg">Resposta Compassiva</CardTitle>
              <CardDescription>
                Transforme a autocrítica numa voz de apoio e compreensão
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-base">Se o seu melhor amigo estivesse com esse pensamento, o que lhe diria?</Label>
                <Textarea 
                  placeholder="Escreva as palavras gentis e de apoio que ofereceria a um amigo querido nesta situação..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Dica:</strong> Pense em como seria gentil, compreensivo(a) e encorajador(a) 
                  com um amigo. Que palavras usaria? Como o(a) ajudaria a ver a situação de forma 
                  mais equilibrada? Agora, ofereça essa mesma gentileza a si próprio(a).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Autocompaixão na Prática</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-base">Como pode incorporar a autocompaixão na sua vida quotidiana?</Label>
                <Textarea 
                  placeholder="Identifique ações práticas para cultivar a autocompaixão no dia a dia..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="grid gap-3">
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="text-sm font-medium mb-1">Sugestões para praticar autocompaixão:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Fale consigo mesmo(a) como falaria com um amigo querido</li>
                    <li>Reconheça que o sofrimento faz parte da experiência humana</li>
                    <li>Seja gentil consigo nas alturas difíceis</li>
                    <li>Permita-se sentir emoções sem julgamento</li>
                    <li>Pratique momentos de autocuidado regularmente</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-accent/20">
            <CardHeader>
              <CardTitle>Reflexão Final</CardTitle>
              <CardDescription>
                Após completar este exercício, que insights obteve?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="Escreva as suas reflexões sobre a experiência de praticar autocompaixão..."
                className="min-h-[100px]"
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
                Baseado em: Gilbert, P. (2009). Introducing Compassion-Focused Therapy. 
                Advances in Psychiatric Treatment, 15(3), 199-208.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PensamentoCompaixao;