import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, TreeDeciduous, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import PrintHeader from "@/components/PrintHeader";

const ModeloArvore = () => {
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
                <h1 className="text-xl font-bold text-foreground">Modelo da Árvore de Pensamentos</h1>
                <p className="text-sm text-muted-foreground">Estrutura cognitiva através da metáfora da árvore</p>
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
        <PrintHeader title="Modelo da Árvore de Pensamentos" />
        {/* Introduction */}
        <Card className="p-8 mb-8 bg-gradient-card shadow-medium">
          <div className="flex gap-4 mb-6">
            <div className="h-12 w-12 rounded-xl bg-therapeutic-warmth/10 flex items-center justify-center flex-shrink-0">
              <TreeDeciduous className="h-6 w-6 text-therapeutic-warmth" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">A Árvore de Pensamentos</h2>
              <p className="text-muted-foreground">Uma metáfora para compreender a estrutura cognitiva</p>
            </div>
          </div>
          
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              A metáfora da árvore oferece uma forma visual e intuitiva de compreender como os nossos 
              pensamentos estão organizados. Tal como uma árvore tem diferentes partes – frutos, tronco 
              e raízes – também a nossa mente tem diferentes níveis de cognições.
            </p>
            <p>
              Este modelo ajuda a perceber que o que vemos à superfície (os frutos) é sustentado por 
              uma estrutura mais profunda e complexa.
            </p>
          </div>
        </Card>

        {/* The Three Parts */}
        <div className="space-y-6 mb-8">
          {/* Fruits - Automatic Thoughts */}
          <Card className="p-8 bg-gradient-to-br from-therapeutic-growth/5 to-therapeutic-growth/10 border-therapeutic-growth/30 shadow-soft">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="h-20 w-20 rounded-2xl bg-therapeutic-growth/20 flex flex-col items-center justify-center">
                  <TreeDeciduous className="h-8 w-8 text-therapeutic-growth mb-1" />
                  <span className="text-xs font-semibold text-therapeutic-growth">FRUTOS</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">Os Frutos – Pensamentos Automáticos</h3>
                <p className="text-muted-foreground mb-4">
                  Os frutos da árvore representam os pensamentos automáticos. São visíveis, aparecem 
                  regularmente e são o resultado de toda a estrutura da árvore (tronco e raízes).
                </p>
                <div className="bg-card/50 p-4 rounded-lg border border-therapeutic-growth/20">
                  <p className="font-medium text-foreground mb-3">Metáfora:</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Os frutos são aquilo que colhemos da árvore – são os pensamentos que "aparecem" 
                    em situações específicas. Podemos ver e tocar nos frutos, mas para mudar a qualidade 
                    dos frutos, precisamos cuidar de toda a árvore.
                  </p>
                  <div className="pt-3 border-t border-therapeutic-growth/20">
                    <p className="font-medium text-foreground mb-2">Exemplos de "Frutos":</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="italic">"Não consigo fazer isto"</p>
                      <p className="italic">"Vão julgar-me"</p>
                      <p className="italic">"Algo de mal vai acontecer"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Trunk - Intermediate Beliefs */}
          <Card className="p-8 bg-gradient-to-br from-therapeutic-warmth/5 to-therapeutic-warmth/10 border-therapeutic-warmth/30 shadow-soft">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="h-20 w-20 rounded-2xl bg-therapeutic-warmth/20 flex flex-col items-center justify-center">
                  <div className="h-12 w-8 bg-therapeutic-warmth/40 rounded-sm mb-1"></div>
                  <span className="text-xs font-semibold text-therapeutic-warmth">TRONCO</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">O Tronco – Crenças Intermediárias</h3>
                <p className="text-muted-foreground mb-4">
                  O tronco sustenta os frutos e conecta-os às raízes. Representa as crenças intermediárias 
                  – as regras, atitudes e suposições que orientam o nosso comportamento.
                </p>
                <div className="bg-card/50 p-4 rounded-lg border border-therapeutic-warmth/20">
                  <p className="font-medium text-foreground mb-3">Metáfora:</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    O tronco é forte e rígido, mas também pode ser flexível. É a estrutura que define 
                    como a árvore cresce e se desenvolve. Para mudar a forma como a árvore produz frutos, 
                    precisamos trabalhar o tronco – fortalecer algumas partes, modificar outras.
                  </p>
                  <div className="pt-3 border-t border-therapeutic-warmth/20">
                    <p className="font-medium text-foreground mb-2">Exemplos de "Tronco":</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="italic">"Devo ser sempre competente para ser valorizado"</p>
                      <p className="italic">"Se eu falhar, então serei rejeitado"</p>
                      <p className="italic">"Tenho que agradar a todos"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Roots - Core Beliefs */}
          <Card className="p-8 bg-gradient-to-br from-therapeutic-trust/5 to-therapeutic-trust/10 border-therapeutic-trust/30 shadow-soft">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="h-20 w-20 rounded-2xl bg-therapeutic-trust/20 flex flex-col items-center justify-center">
                  <div className="flex gap-1 mb-1">
                    <div className="h-8 w-1 bg-therapeutic-trust/40 rounded-full transform -rotate-12"></div>
                    <div className="h-10 w-1 bg-therapeutic-trust/40 rounded-full"></div>
                    <div className="h-8 w-1 bg-therapeutic-trust/40 rounded-full transform rotate-12"></div>
                  </div>
                  <span className="text-xs font-semibold text-therapeutic-trust">RAÍZES</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">As Raízes – Crenças Nucleares</h3>
                <p className="text-muted-foreground mb-4">
                  As raízes estão profundamente enterradas e não são visíveis. Representam as crenças 
                  nucleares – as convicções mais profundas sobre nós mesmos, os outros e o mundo.
                </p>
                <div className="bg-card/50 p-4 rounded-lg border border-therapeutic-trust/20">
                  <p className="font-medium text-foreground mb-3">Metáfora:</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    As raízes nutrem toda a árvore. São invisíveis, mas extremamente poderosas. 
                    Determina a saúde, força e direção do crescimento. Para mudar verdadeiramente a 
                    árvore, precisamos trabalhar nas raízes – embora seja o trabalho mais profundo e 
                    desafiante.
                  </p>
                  <div className="pt-3 border-t border-therapeutic-trust/20">
                    <p className="font-medium text-foreground mb-2">Exemplos de "Raízes":</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="italic">"Sou inadequado"</p>
                      <p className="italic">"Não sou digno de amor"</p>
                      <p className="italic">"Sou vulnerável"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* How to Use This Model */}
        <Card className="p-8 mb-8 bg-gradient-card shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-6">Como Usar Este Modelo na Terapia</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <div className="flex gap-3">
              <span className="text-therapeutic-growth font-bold mt-1">•</span>
              <p>
                <strong className="text-foreground">Começar pelos Frutos:</strong> É mais fácil identificar 
                os pensamentos automáticos. Use-os como ponto de partida para explorar níveis mais profundos.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-therapeutic-warmth font-bold mt-1">•</span>
              <p>
                <strong className="text-foreground">Explorar o Tronco:</strong> Pergunte "Que regra ou 
                suposição está por trás deste pensamento?" para chegar às crenças intermediárias.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-therapeutic-trust font-bold mt-1">•</span>
              <p>
                <strong className="text-foreground">Alcançar as Raízes:</strong> Use técnicas como a seta 
                descendente para descobrir as crenças nucleares mais profundas.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <p>
                <strong className="text-foreground">Trabalhar de Forma Integrada:</strong> A mudança 
                duradoura vem de trabalhar todos os níveis, embora o foco possa variar conforme o momento 
                terapêutico.
              </p>
            </div>
          </div>
        </Card>

        {/* Worksheet */}
        <Card className="p-8 bg-primary/5 border-primary/20 shadow-medium">
          <h3 className="text-2xl font-bold text-foreground mb-6">Mapeamento da Árvore de Pensamentos</h3>
          <p className="text-muted-foreground mb-6">
            Use esta ferramenta para mapear a estrutura cognitiva do paciente.
          </p>

          <div className="space-y-6">
            <div>
              <Label htmlFor="situacao-arvore" className="text-base font-semibold text-foreground mb-3 block">
                Situação Desencadeante
              </Label>
              <Textarea
                id="situacao-arvore"
                placeholder="Descreva a situação que ativou estes pensamentos..."
                rows={3}
                className="resize-none"
              />
            </div>

            <div className="border-l-4 border-therapeutic-growth pl-4">
              <Label htmlFor="frutos" className="text-base font-semibold text-foreground mb-3 block flex items-center gap-2">
                <TreeDeciduous className="h-5 w-5 text-therapeutic-growth" />
                Os Frutos (Pensamentos Automáticos)
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                Que pensamentos aparecem na situação?
              </p>
              <Textarea
                id="frutos"
                placeholder="Liste os pensamentos automáticos..."
                rows={4}
                className="resize-none"
              />
            </div>

            <div className="border-l-4 border-therapeutic-warmth pl-4">
              <Label htmlFor="tronco" className="text-base font-semibold text-foreground mb-3 block">
                O Tronco (Crenças Intermediárias)
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                Que regras, atitudes ou suposições sustentam estes pensamentos?
              </p>
              <Textarea
                id="tronco"
                placeholder="Identifique as crenças intermediárias..."
                rows={4}
                className="resize-none"
              />
            </div>

            <div className="border-l-4 border-therapeutic-trust pl-4">
              <Label htmlFor="raizes" className="text-base font-semibold text-foreground mb-3 block">
                As Raízes (Crenças Nucleares)
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                Qual a crença mais profunda que nutre toda esta estrutura?
              </p>
              <Textarea
                id="raizes"
                placeholder="Explore as crenças nucleares..."
                rows={4}
                className="resize-none"
              />
            </div>

            <div>
              <Label htmlFor="intervencao" className="text-base font-semibold text-foreground mb-3 block">
                Plano de Intervenção
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                Em que parte da árvore irá focar o trabalho terapêutico?
              </p>
              <Textarea
                id="intervencao"
                placeholder="Descreva a estratégia terapêutica..."
                rows={5}
                className="resize-none"
              />
            </div>
          </div>

          <div className="flex gap-4 justify-end mt-8 no-print">
            <Button variant="outline">Limpar</Button>
            <Button>Guardar Mapeamento</Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default ModeloArvore;
