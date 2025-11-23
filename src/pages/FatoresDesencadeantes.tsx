import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import PrintHeader from "@/components/PrintHeader";
import { Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import illustration from "@/assets/fatores-desencadeantes-illustration.png";

const FatoresDesencadeantes = () => {
  const [respostas, setRespostas] = useState({
    situacoes: "",
    agravar: "",
    sensacoesFisicas: "",
    pensamentosIntrusivos: "",
    preocupacoes: "",
    pessoas: "",
    local: ""
  });

  const handleChange = (field: string, value: string) => {
    setRespostas(prev => ({ ...prev, [field]: value }));
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
        <PrintHeader title="Investigando Fatores Desencadeantes da Ansiedade" />
        
        <div className="print:hidden">
          <Button variant="outline" onClick={() => window.history.back()} className="mb-4">
            ← Voltar
          </Button>
        </div>

        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-2xl md:text-3xl">Fatores Desencadeantes</CardTitle>
                <CardDescription className="text-base mt-2">
                  Identificar gatilhos e padrões que aumentam a ansiedade
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-8">
            <div className="flex justify-center my-6">
              <img 
                src={illustration} 
                alt="Ilustração fatores desencadeantes" 
                className="max-w-md w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Compreender os fatores que desencadeiam a ansiedade é fundamental para desenvolver estratégias 
                eficazes de enfrentamento. Ao identificar padrões e gatilhos, torna-se possível antecipar e 
                gerir melhor as situações ansiogénicas.
              </p>
            </div>

            <section className="space-y-6">
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Dica:</strong> Repita este exercício periodicamente para começar a perceber se há 
                  sempre algum padrão ou semelhança nas suas respostas. Fazendo isso, será mais fácil identificar 
                  os principais fatores que desencadeiam a sua ansiedade.
                </p>
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  🎯 Já percebeu se existem certas situações ou experiências que têm mais probabilidade de o(a) deixar ansioso(a)?
                </Label>
                <Textarea
                  value={respostas.situacoes}
                  onChange={(e) => handleChange('situacoes', e.target.value)}
                  placeholder="Descreva as situações que frequentemente desencadeiam ansiedade..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  📈 Percebeu se há algo em particular numa situação que poderia agravar a sua ansiedade?
                </Label>
                <Textarea
                  value={respostas.agravar}
                  onChange={(e) => handleChange('agravar', e.target.value)}
                  placeholder="Que elementos específicos tornam a situação mais ansiogénica?"
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  💓 Percebeu se as mudanças nas sensações físicas ocorrem antes de começar a sentir-se ansioso(a)? 
                  Ou as sensações corporais surgem apenas depois de já estar ansioso(a)?
                </Label>
                <Textarea
                  value={respostas.sensacoesFisicas}
                  onChange={(e) => handleChange('sensacoesFisicas', e.target.value)}
                  placeholder="Descreva a ordem em que as sensações físicas aparecem..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  💭 Alguma vez um pensamento, imagem ou impulso acerca de algo estranho, inesperado ou 
                  perturbador surgiu subitamente na sua mente?
                </Label>
                <Textarea
                  value={respostas.pensamentosIntrusivos}
                  onChange={(e) => handleChange('pensamentosIntrusivos', e.target.value)}
                  placeholder="Descreva estes pensamentos intrusivos e quando costumam surgir..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  😰 Com o que se está a preocupar?
                </Label>
                <Textarea
                  value={respostas.preocupacoes}
                  onChange={(e) => handleChange('preocupacoes', e.target.value)}
                  placeholder="Liste as principais preocupações que ocupam a sua mente..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  👥 Com quem está quando a sua ansiedade aumenta?
                </Label>
                <Textarea
                  value={respostas.pessoas}
                  onChange={(e) => handleChange('pessoas', e.target.value)}
                  placeholder="Identifique pessoas ou tipos de interação que desencadeiam ansiedade..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  📍 Onde geralmente está? O que frequentemente está a fazer?
                </Label>
                <Textarea
                  value={respostas.local}
                  onChange={(e) => handleChange('local', e.target.value)}
                  placeholder="Descreva os locais e atividades associadas à ansiedade..."
                  className="min-h-[120px]"
                />
              </div>
            </section>

            <div className="text-xs text-muted-foreground italic mt-8 pt-6 border-t">
              Baseado em: CLARK, D. A.; BECK, A. T. Terapia cognitiva para os transtornos de ansiedade. 
              Porto Alegre: Artmed, 2012.
            </div>

            <div className="flex gap-4 justify-end print:hidden pt-6">
              <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                💾 Guardar
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

export default FatoresDesencadeantes;
