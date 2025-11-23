import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Waves, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import PrintHeader from "@/components/PrintHeader";

const ModeloIceberg = () => {
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
                <h1 className="text-xl font-bold text-foreground">Modelo do Iceberg Cognitivo</h1>
                <p className="text-sm text-muted-foreground">Os três níveis de pensamentos</p>
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
        <PrintHeader title="Modelo do Iceberg Cognitivo" />
        {/* Introduction */}
        <Card className="p-8 mb-8 bg-gradient-card shadow-medium">
          <div className="flex gap-4 mb-6">
            <div className="h-12 w-12 rounded-xl bg-therapeutic-trust/10 flex items-center justify-center flex-shrink-0">
              <Waves className="h-6 w-6 text-therapeutic-trust" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">O Modelo do Iceberg</h2>
              <p className="text-muted-foreground">Compreendendo a estrutura dos nossos pensamentos</p>
            </div>
          </div>
          
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Tal como um iceberg, a maior parte dos nossos pensamentos e crenças está "submersa" – 
              não os vemos conscientemente no dia a dia. O que percebemos facilmente são apenas os 
              pensamentos automáticos, que representam a "ponta do iceberg".
            </p>
            <p>
              Este modelo ajuda-nos a compreender que existem três níveis de cognições, cada um mais 
              profundo e influente que o anterior.
            </p>
          </div>
        </Card>

        {/* The Three Levels */}
        <div className="space-y-6 mb-8">
          {/* Level 1 - Above Water */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30 shadow-soft">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Superfície
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">Pensamentos Automáticos</h3>
                <p className="text-muted-foreground mb-4">
                  São os pensamentos que surgem espontaneamente em resposta a situações específicas. 
                  Aparecem rapidamente e muitas vezes nem nos apercebemos deles.
                </p>
                <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                  <p className="font-medium text-foreground mb-2">Características:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Surgem automaticamente, sem esforço consciente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>São específicos a situações concretas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Podem ser observados e questionados mais facilmente</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-primary/20">
                    <p className="font-medium text-foreground mb-2">Exemplos:</p>
                    <p className="text-sm text-muted-foreground italic">"Vou fazer figura de parvo"</p>
                    <p className="text-sm text-muted-foreground italic">"Ninguém gosta de mim"</p>
                    <p className="text-sm text-muted-foreground italic">"Não vou conseguir"</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Level 2 - Below Water Line */}
          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/30 shadow-soft">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-2xl bg-secondary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    Submerso
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">Crenças Intermediárias</h3>
                <p className="text-muted-foreground mb-4">
                  São regras, atitudes e suposições que aprendemos ao longo da vida. Funcionam como 
                  "filtros" através dos quais interpretamos o mundo.
                </p>
                <div className="bg-card/50 p-4 rounded-lg border border-secondary/20">
                  <p className="font-medium text-foreground mb-2">Características:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Expressas como "Se... então" ou "Devo/Deveria"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Orientam o nosso comportamento de forma mais geral</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Precisam de exploração mais profunda para serem identificadas</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-secondary/20">
                    <p className="font-medium text-foreground mb-2">Exemplos:</p>
                    <p className="text-sm text-muted-foreground italic">"Se eu falhar, então sou incompetente"</p>
                    <p className="text-sm text-muted-foreground italic">"Devo agradar a todos para ser aceite"</p>
                    <p className="text-sm text-muted-foreground italic">"Se mostro fraqueza, serei rejeitado"</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Level 3 - Deep Below */}
          <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/30 shadow-soft">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-xs font-semibold text-accent uppercase tracking-wider">
                    Profundidade
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">Crenças Nucleares</h3>
                <p className="text-muted-foreground mb-4">
                  São as crenças mais profundas e fundamentais sobre nós mesmos, os outros e o mundo. 
                  São absolutas e generalizadas.
                </p>
                <div className="bg-card/50 p-4 rounded-lg border border-accent/20">
                  <p className="font-medium text-foreground mb-2">Características:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Muito rígidas e absolutas ("Sou...", "As pessoas são...")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Formadas geralmente na infância e adolescência</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Influenciam todos os níveis acima delas</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-accent/20">
                    <p className="font-medium text-foreground mb-2">Exemplos:</p>
                    <p className="text-sm text-muted-foreground italic">"Sou inadequado"</p>
                    <p className="text-sm text-muted-foreground italic">"Sou indigno de amor"</p>
                    <p className="text-sm text-muted-foreground italic">"O mundo é perigoso"</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Worksheet */}
        <Card className="p-8 bg-primary/5 border-primary/20 shadow-medium">
          <h3 className="text-2xl font-bold text-foreground mb-6">Exploração do Iceberg Cognitivo</h3>
          <p className="text-muted-foreground mb-6">
            Trabalhe com o paciente para identificar os três níveis de pensamentos numa situação específica.
          </p>

          <div className="space-y-6">
            <div>
              <Label htmlFor="situacao" className="text-base font-semibold text-foreground mb-3 block">
                Situação ou Evento Desencadeante
              </Label>
              <Textarea
                id="situacao"
                placeholder="Descreva a situação que ativou os pensamentos..."
                rows={3}
                className="resize-none"
              />
            </div>

            <div className="border-l-4 border-primary pl-4">
              <Label htmlFor="automaticos" className="text-base font-semibold text-foreground mb-3 block">
                Nível 1: Pensamentos Automáticos
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                Que pensamentos surgiram imediatamente?
              </p>
              <Textarea
                id="automaticos"
                placeholder="Ex: Vou falhar, todos vão reparar..."
                rows={4}
                className="resize-none"
              />
            </div>

            <div className="border-l-4 border-secondary pl-4">
              <Label htmlFor="intermediarias" className="text-base font-semibold text-foreground mb-3 block">
                Nível 2: Crenças Intermediárias
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                Que regras ou suposições estão por trás desses pensamentos?
              </p>
              <Textarea
                id="intermediarias"
                placeholder="Ex: Se eu falhar, então sou incompetente..."
                rows={4}
                className="resize-none"
              />
            </div>

            <div className="border-l-4 border-accent pl-4">
              <Label htmlFor="nucleares" className="text-base font-semibold text-foreground mb-3 block">
                Nível 3: Crenças Nucleares
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                Qual a crença mais profunda sobre si mesmo?
              </p>
              <Textarea
                id="nucleares"
                placeholder="Ex: Sou inadequado, sou um fracasso..."
                rows={4}
                className="resize-none"
              />
            </div>
          </div>

          <div className="flex gap-4 justify-end mt-8 no-print">
            <Button variant="outline">Limpar</Button>
            <Button>Guardar Exploração</Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default ModeloIceberg;
