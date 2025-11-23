import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Heart, Zap, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import PrintHeader from "@/components/PrintHeader";

const PensamentosAutomaticos = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50 no-print">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold text-foreground">Pensamentos Automáticos e Reações</h1>
                <p className="text-sm text-muted-foreground">Identificação e trabalho com pensamentos automáticos</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => window.print()}>
              <Printer className="h-4 w-4 mr-2" />
              Imprimir
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <PrintHeader title="Pensamentos Automáticos e Reações" />
        {/* Introduction */}
        <Card className="p-8 mb-8 bg-gradient-card shadow-medium">
          <div className="flex gap-4 mb-6">
            <div className="h-12 w-12 rounded-xl bg-therapeutic-calm/10 flex items-center justify-center flex-shrink-0">
              <Zap className="h-6 w-6 text-therapeutic-calm" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Compreendendo Pensamentos Automáticos</h2>
              <p className="text-muted-foreground">E como influenciam emoções e comportamentos</p>
            </div>
          </div>
          
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Os <strong>pensamentos automáticos</strong> são avaliações rápidas e espontâneas que fazemos sobre 
              situações, outras pessoas ou nós mesmos. Surgem automaticamente, sem esforço consciente, e têm um 
              impacto significativo nas nossas emoções e comportamentos.
            </p>
            <p>
              Compreender e trabalhar com pensamentos automáticos é fundamental na Terapia Cognitivo-Comportamental, 
              pois são o ponto de entrada mais acessível para modificar padrões de pensamento menos úteis.
            </p>
          </div>
        </Card>

        {/* Characteristics */}
        <Card className="p-8 mb-8 bg-gradient-card shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-6">Características dos Pensamentos Automáticos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Automáticos</h4>
                  <p className="text-sm text-muted-foreground">
                    Surgem espontaneamente, sem intenção ou esforço consciente
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Rápidos</h4>
                  <p className="text-sm text-muted-foreground">
                    Passam rapidamente pela mente, muitas vezes nem nos apercebemos deles
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Breves</h4>
                  <p className="text-sm text-muted-foreground">
                    Geralmente são curtos, como "frases-chave" ou imagens mentais
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="h-3 w-3 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Plausíveis</h4>
                  <p className="text-sm text-muted-foreground">
                    Parecem razoáveis e verdadeiros no momento, mesmo que distorcidos
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="h-3 w-3 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Específicos</h4>
                  <p className="text-sm text-muted-foreground">
                    Relacionam-se com situações concretas e momentos específicos
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="h-3 w-3 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Influentes</h4>
                  <p className="text-sm text-muted-foreground">
                    Têm um impacto direto nas emoções e comportamentos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* The ABC Model */}
        <Card className="p-8 mb-8 bg-gradient-card shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-6">O Modelo ABC da Reação</h3>
          <p className="text-muted-foreground mb-6">
            Este modelo ajuda a compreender como pensamentos, emoções e comportamentos se relacionam:
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-primary">A</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-foreground mb-2">Acontecimento (Situação)</h4>
                <p className="text-muted-foreground">
                  O evento ou situação que desencadeia a sequência. Pode ser externo (algo que acontece) 
                  ou interno (uma memória, sensação física).
                </p>
                <div className="mt-3 p-3 bg-muted/30 rounded-md">
                  <p className="text-sm text-muted-foreground italic">
                    Exemplo: Receber um e-mail do chefe a pedir para falar
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-8 w-0.5 bg-border"></div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-secondary">P</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-foreground mb-2">Pensamento Automático</h4>
                <p className="text-muted-foreground">
                  A interpretação rápida e automática que fazemos da situação. É este pensamento 
                  (e não a situação em si) que determina a nossa reação emocional.
                </p>
                <div className="mt-3 p-3 bg-muted/30 rounded-md">
                  <p className="text-sm text-muted-foreground italic">
                    Exemplo: "Fiz algo errado, vou ser despedido"
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-8 w-0.5 bg-border"></div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-accent">R</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-foreground mb-2">Reação (Emocional e Comportamental)</h4>
                <p className="text-muted-foreground">
                  A resposta emocional e comportamental resultante do pensamento automático.
                </p>
                <div className="mt-3 grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-muted/30 rounded-md">
                    <p className="text-sm font-medium text-foreground mb-1">Emocional:</p>
                    <p className="text-sm text-muted-foreground italic">Ansiedade intensa</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-md">
                    <p className="text-sm font-medium text-foreground mb-1">Comportamental:</p>
                    <p className="text-sm text-muted-foreground italic">Evitar o chefe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Nota Terapêutica:</strong> Ao trabalhar com pacientes, 
              é importante enfatizar que <strong>não é a situação em si que causa a emoção, mas a interpretação 
              (pensamento automático)</strong> que fazemos dela. Esta compreensão é fundamental para a mudança.
            </p>
          </div>
        </Card>

        {/* Common Thinking Errors */}
        <Card className="p-8 mb-8 bg-gradient-card shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-6">Distorções Cognitivas Comuns</h3>
          <p className="text-muted-foreground mb-6">
            Padrões típicos de pensamentos automáticos distorcidos:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-card rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Pensamento Tudo-ou-Nada</h4>
              <p className="text-sm text-muted-foreground">
                Ver as situações em categorias extremas, sem meio-termo
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Catastrofização</h4>
              <p className="text-sm text-muted-foreground">
                Prever o pior cenário possível como se fosse certo
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Leitura Mental</h4>
              <p className="text-sm text-muted-foreground">
                Assumir que sabemos o que os outros pensam
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Personalização</h4>
              <p className="text-sm text-muted-foreground">
                Assumir responsabilidade por eventos fora do nosso controlo
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Filtragem Mental</h4>
              <p className="text-sm text-muted-foreground">
                Focar apenas nos aspetos negativos, ignorando os positivos
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Generalização Excessiva</h4>
              <p className="text-sm text-muted-foreground">
                Tirar conclusões gerais baseadas num único evento
              </p>
            </div>
          </div>
        </Card>

        {/* Worksheet - Registro de Pensamentos */}
        <Card className="p-8 bg-primary/5 border-primary/20 shadow-medium">
          <h3 className="text-2xl font-bold text-foreground mb-6">Registo de Pensamentos Automáticos</h3>
          <p className="text-muted-foreground mb-6">
            Ferramenta para identificar e trabalhar pensamentos automáticos com o paciente.
          </p>

          <div className="space-y-6">
            {/* Situação */}
            <div className="p-6 bg-card rounded-lg border-2 border-primary/20">
              <Label htmlFor="situacao-pa" className="text-base font-semibold text-foreground mb-3 block">
                A - Acontecimento/Situação
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                O que aconteceu? Onde? Quando? Com quem?
              </p>
              <Textarea
                id="situacao-pa"
                placeholder="Descreva a situação específica..."
                rows={3}
                className="resize-none"
              />
            </div>

            {/* Pensamentos */}
            <div className="p-6 bg-card rounded-lg border-2 border-secondary/20">
              <Label htmlFor="pensamentos" className="text-base font-semibold text-foreground mb-3 block">
                P - Pensamentos Automáticos
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                Que pensamentos passaram pela mente? O que isso significa sobre mim/outros/futuro?
              </p>
              <Textarea
                id="pensamentos"
                placeholder="Liste os pensamentos automáticos..."
                rows={4}
                className="resize-none"
              />
              <div className="mt-4">
                <Label htmlFor="credibilidade" className="text-sm font-medium text-foreground mb-2 block">
                  Credibilidade do pensamento (0-100%)
                </Label>
                <Input
                  id="credibilidade"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0-100"
                  className="max-w-32"
                />
              </div>
            </div>

            {/* Reações */}
            <div className="p-6 bg-card rounded-lg border-2 border-accent/20">
              <Label className="text-base font-semibold text-foreground mb-4 block">
                R - Reações
              </Label>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="emocoes" className="text-sm font-medium text-foreground mb-2 block">
                    Emoções (0-100% intensidade)
                  </Label>
                  <Textarea
                    id="emocoes"
                    placeholder="Ex: Ansiedade (80%), Tristeza (60%)..."
                    rows={3}
                    className="resize-none"
                  />
                </div>

                <div>
                  <Label htmlFor="sensacoes" className="text-sm font-medium text-foreground mb-2 block">
                    Sensações Físicas
                  </Label>
                  <Textarea
                    id="sensacoes"
                    placeholder="Ex: Coração acelerado, aperto no peito..."
                    rows={2}
                    className="resize-none"
                  />
                </div>

                <div>
                  <Label htmlFor="comportamentos" className="text-sm font-medium text-foreground mb-2 block">
                    Comportamentos
                  </Label>
                  <Textarea
                    id="comportamentos"
                    placeholder="O que fez ou teve vontade de fazer?"
                    rows={3}
                    className="resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Questionamento */}
            <div className="p-6 bg-card rounded-lg border-2 border-therapeutic-growth/20">
              <Label htmlFor="evidencias" className="text-base font-semibold text-foreground mb-3 block">
                Questionamento do Pensamento
              </Label>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">
                    Quais são as evidências A FAVOR do pensamento?
                  </p>
                  <Textarea
                    id="evidencias-favor"
                    placeholder="Factos concretos que apoiam o pensamento..."
                    rows={3}
                    className="resize-none"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-2">
                    Quais são as evidências CONTRA o pensamento?
                  </p>
                  <Textarea
                    id="evidencias-contra"
                    placeholder="Factos que contradizem o pensamento..."
                    rows={3}
                    className="resize-none"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-2">
                    Existe uma forma alternativa de ver esta situação?
                  </p>
                  <Textarea
                    id="alternativa"
                    placeholder="Perspetiva mais equilibrada ou realista..."
                    rows={3}
                    className="resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Resultado */}
            <div className="p-6 bg-card rounded-lg border-2 border-therapeutic-trust/20">
              <Label htmlFor="resultado" className="text-base font-semibold text-foreground mb-3 block">
                Resultado
              </Label>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="pensamento-alternativo" className="text-sm font-medium text-foreground mb-2 block">
                    Pensamento Alternativo/Balanceado
                  </Label>
                  <Textarea
                    id="pensamento-alternativo"
                    placeholder="Pensamento mais equilibrado e realista..."
                    rows={3}
                    className="resize-none"
                  />
                  <div className="mt-3">
                    <Label htmlFor="nova-credibilidade" className="text-sm font-medium text-foreground mb-2 block">
                      Credibilidade do novo pensamento (0-100%)
                    </Label>
                    <Input
                      id="nova-credibilidade"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="0-100"
                      className="max-w-32"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="novas-emocoes" className="text-sm font-medium text-foreground mb-2 block">
                    Reavaliação das Emoções (0-100% intensidade)
                  </Label>
                  <Textarea
                    id="novas-emocoes"
                    placeholder="Como se sente agora? Qual a intensidade?"
                    rows={2}
                    className="resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-end mt-8 no-print">
            <Button variant="outline">Limpar Registo</Button>
            <Button>Guardar Registo</Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default PensamentosAutomaticos;
