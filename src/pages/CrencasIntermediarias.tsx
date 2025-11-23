import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Brain, Lightbulb, AlertCircle, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import PrintHeader from "@/components/PrintHeader";

const CrencasIntermediarias = () => {
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
                <h1 className="text-xl font-bold text-foreground">Crenças Intermediárias</h1>
                <p className="text-sm text-muted-foreground">Psicoeducação sobre regras, atitudes e suposições</p>
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
        <PrintHeader title="Crenças Intermediárias" />
        {/* Introduction */}
        <Card className="p-8 mb-8 bg-gradient-card shadow-medium">
          <div className="flex gap-4 mb-6">
            <div className="h-12 w-12 rounded-xl bg-therapeutic-calm/10 flex items-center justify-center flex-shrink-0">
              <Brain className="h-6 w-6 text-therapeutic-calm" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">O que são Crenças Intermediárias?</h2>
              <p className="text-muted-foreground">Material psicoeducativo para trabalho terapêutico</p>
            </div>
          </div>
          
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              As <strong>crenças intermediárias</strong> são pensamentos que ficam entre as nossas crenças mais profundas 
              (crenças nucleares) e os pensamentos automáticos do dia a dia. Elas funcionam como regras, atitudes 
              e suposições que orientam o nosso comportamento.
            </p>
            <p>
              Estas crenças geralmente aparecem na forma de <strong>"se... então"</strong> ou <strong>"devo/deveria"</strong>, 
              e influenciam fortemente como interpretamos situações e como nos comportamos.
            </p>
          </div>
        </Card>

        {/* Types of Intermediate Beliefs */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card shadow-soft">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Regras</h3>
            <p className="text-sm text-muted-foreground mb-4">
              São declarações rígidas sobre como devemos agir, geralmente usando "devo" ou "tenho que".
            </p>
            <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
              <p className="font-medium text-foreground">Exemplos:</p>
              <p className="text-muted-foreground">"Devo ser sempre perfeito"</p>
              <p className="text-muted-foreground">"Tenho que agradar a todos"</p>
              <p className="text-muted-foreground">"Nunca devo mostrar fraqueza"</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-soft">
            <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Brain className="h-5 w-5 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Atitudes</h3>
            <p className="text-sm text-muted-foreground mb-4">
              São formas de pensar sobre nós mesmos, os outros e o mundo.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
              <p className="font-medium text-foreground">Exemplos:</p>
              <p className="text-muted-foreground">"Não consigo confiar nas pessoas"</p>
              <p className="text-muted-foreground">"O mundo é perigoso"</p>
              <p className="text-muted-foreground">"Sou incapaz de lidar com desafios"</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-soft">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <AlertCircle className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Suposições</h3>
            <p className="text-sm text-muted-foreground mb-4">
              São pensamentos condicionais, geralmente na forma "se... então".
            </p>
            <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
              <p className="font-medium text-foreground">Exemplos:</p>
              <p className="text-muted-foreground">"Se eu falhar, sou um fracasso"</p>
              <p className="text-muted-foreground">"Se as pessoas me conhecerem, vão rejeitar-me"</p>
              <p className="text-muted-foreground">"Se pedir ajuda, sou fraco"</p>
            </div>
          </Card>
        </div>

        {/* How They Impact Us */}
        <Card className="p-8 mb-8 bg-gradient-card shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-6">Como Nos Afetam?</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Influenciam Comportamentos</h4>
                <p className="text-muted-foreground">
                  As crenças intermediárias guiam as nossas ações diárias. Por exemplo, se acreditamos que 
                  "devemos ser sempre perfeitos", podemos evitar situações onde não temos certeza de ter sucesso.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-secondary font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Criam Padrões de Pensamento</h4>
                <p className="text-muted-foreground">
                  Funcionam como filtros através dos quais interpretamos experiências. Podem fazer-nos focar 
                  apenas em informações que confirmam essas crenças.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-accent font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Mantêm Crenças Nucleares</h4>
                <p className="text-muted-foreground">
                  Ajudam a manter as nossas crenças mais profundas ativas, mesmo quando não são úteis ou 
                  correspondem à realidade.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Worksheet Section */}
        <Card className="p-8 bg-primary/5 border-primary/20 shadow-medium">
          <h3 className="text-2xl font-bold text-foreground mb-6">Identificação de Crenças Intermediárias</h3>
          <p className="text-muted-foreground mb-6">
            Use este espaço para trabalhar com o paciente na identificação das suas crenças intermediárias.
          </p>

          <div className="space-y-6">
            <div>
              <Label htmlFor="regras" className="text-base font-semibold text-foreground mb-3 block">
                Regras Identificadas ("Devo...", "Tenho que...")
              </Label>
              <Textarea
                id="regras"
                placeholder="Ex: Devo ser sempre produtivo, Tenho que fazer tudo sozinho..."
                rows={4}
                className="resize-none"
              />
            </div>

            <div>
              <Label htmlFor="atitudes" className="text-base font-semibold text-foreground mb-3 block">
                Atitudes Sobre Si, Outros e o Mundo
              </Label>
              <Textarea
                id="atitudes"
                placeholder="Ex: As pessoas não são confiáveis, Sou vulnerável demais..."
                rows={4}
                className="resize-none"
              />
            </div>

            <div>
              <Label htmlFor="suposicoes" className="text-base font-semibold text-foreground mb-3 block">
                Suposições ("Se... então...")
              </Label>
              <Textarea
                id="suposicoes"
                placeholder="Ex: Se eu mostrar vulnerabilidade, então serei rejeitado..."
                rows={4}
                className="resize-none"
              />
            </div>

            <div>
              <Label htmlFor="impacto" className="text-base font-semibold text-foreground mb-3 block">
                Como Estas Crenças Afetam o Comportamento?
              </Label>
              <Textarea
                id="impacto"
                placeholder="Descreva os comportamentos e estratégias influenciados por estas crenças..."
                rows={5}
                className="resize-none"
              />
            </div>
          </div>

          <div className="flex gap-4 justify-end mt-8 no-print">
            <Button variant="outline">Limpar</Button>
            <Button>Guardar Registo</Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default CrencasIntermediarias;
