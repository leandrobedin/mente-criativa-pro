import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PrintHeader from "@/components/PrintHeader";
import { Scale } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import illustration from "@/assets/e-se-illustration.png";

const PerspectivaEquilibrada = () => {
  const [formData, setFormData] = useState({
    situacao: "",
    piorCenario: "",
    melhorCenario: "",
    provavel: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    toast.success("Dados guardados com sucesso!");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <PrintHeader title="E se...? - Explorando uma Perspectiva Equilibrada" />
        
        <div className="print:hidden">
          <Button variant="outline" onClick={() => window.history.back()} className="mb-4">
            ← Voltar
          </Button>
        </div>

        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
            <div className="flex items-center gap-3">
              <Scale className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-2xl md:text-3xl">E se...?</CardTitle>
                <CardDescription className="text-base mt-2">
                  Explorando uma Perspectiva Equilibrada
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-8">
            <div className="flex justify-center my-6">
              <img 
                src={illustration} 
                alt="Ilustração perspectiva equilibrada" 
                className="max-w-md w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                📋 Identificação das Preocupações
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Escolha uma situação específica em que costuma dizer a si mesmo "e se..." antecipando uma 
                ameaça ou perigo. Liste as preocupações específicas associadas a essa situação. Por exemplo, 
                "e se algo terrível acontecer?" ou "e se tudo correr mal?".
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                ✨ Descoberta de Possibilidades Positivas
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Para cada preocupação identificada, desafie-se a encontrar três formas positivas pelas quais 
                a situação pode desenrolar-se. Pense em resultados favoráveis ou soluções alternativas.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                ⚖️ Construção de uma Perspectiva Equilibrada
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Diante das perspectivas extremas, tanto negativas quanto positivas, considere construir uma 
                visão mais equilibrada da situação - aquela que é mais provável de ocorrer.
              </p>
            </section>

            <div className="bg-muted/50 rounded-lg p-6 space-y-6 mt-8">
              <div className="space-y-3">
                <Label htmlFor="situacao" className="text-base font-semibold">
                  Situação
                </Label>
                <Textarea
                  id="situacao"
                  placeholder="Descreva a situação que gera preocupação..."
                  value={formData.situacao}
                  onChange={(e) => handleInputChange("situacao", e.target.value)}
                  className="min-h-[100px] resize-none"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="piorCenario" className="text-base font-semibold text-destructive">
                  Pior Cenário
                </Label>
                <Textarea
                  id="piorCenario"
                  placeholder="O que de pior pode acontecer?"
                  value={formData.piorCenario}
                  onChange={(e) => handleInputChange("piorCenario", e.target.value)}
                  className="min-h-[120px] resize-none border-destructive/30"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="melhorCenario" className="text-base font-semibold text-green-600 dark:text-green-500">
                  Melhor Cenário Possível
                </Label>
                <Textarea
                  id="melhorCenario"
                  placeholder="O que de melhor pode acontecer?"
                  value={formData.melhorCenario}
                  onChange={(e) => handleInputChange("melhorCenario", e.target.value)}
                  className="min-h-[120px] resize-none border-green-600/30"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="provavel" className="text-base font-semibold text-primary">
                  Provável (Perspectiva Equilibrada)
                </Label>
                <Textarea
                  id="provavel"
                  placeholder="O que é mais provável de acontecer?"
                  value={formData.provavel}
                  onChange={(e) => handleInputChange("provavel", e.target.value)}
                  className="min-h-[120px] resize-none border-primary/30"
                />
              </div>
            </div>

            <div className="flex gap-4 justify-end print:hidden pt-6">
              <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                💾 Guardar
              </Button>
              <Button onClick={handlePrint} variant="outline">
                🖨️ Imprimir
              </Button>
            </div>

            <div className="text-xs text-muted-foreground italic mt-8 pt-6 border-t">
              Baseado em: CLARK, David A.; BECK, Aaron T. Vencendo a ansiedade e a preocupação com a 
              terapia cognitivo-comportamental: Manual do paciente. Porto Alegre: Artmed, 2014.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PerspectivaEquilibrada;
