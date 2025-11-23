import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import PrintHeader from "@/components/PrintHeader";
import { Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ComportamentosSeguranca = () => {
  const [respostas, setRespostas] = useState({
    evitacao: "",
    compromissos: "",
    decisoes: "",
    informacoes: "",
    aprovacao: "",
    rituais: "",
    falarPublico: "",
    verificacaoCorpo: "",
    outros: ""
  });

  const [comportamentosIdentificados, setComportamentosIdentificados] = useState<string[]>([]);

  const comportamentos = [
    { id: "evitacao", label: "Evito fazer coisas devido à ansiedade" },
    { id: "compromissos", label: "Desmarcação frequente de compromissos" },
    { id: "decisoes", label: "Evito tomar decisões importantes por medo de errar" },
    { id: "informacoes", label: "Procuro constantemente informações para reduzir incerteza" },
    { id: "aprovacao", label: "Procuro constantemente aprovação dos outros" },
    { id: "rituais", label: "Tenho rituais ou compulsões para reduzir ansiedade" },
    { id: "falarPublico", label: "Evito falar em público ou participar de eventos sociais" },
    { id: "verificacaoCorpo", label: "Verifico constantemente o meu corpo em busca de sintomas" }
  ];

  const handleCheckChange = (id: string, checked: boolean) => {
    if (checked) {
      setComportamentosIdentificados([...comportamentosIdentificados, id]);
    } else {
      setComportamentosIdentificados(comportamentosIdentificados.filter(c => c !== id));
    }
  };

  const handleTextChange = (field: string, value: string) => {
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
        <PrintHeader title="Investigando Comportamentos de Segurança" />
        
        <div className="print:hidden">
          <Button variant="outline" onClick={() => window.history.back()} className="mb-4">
            ← Voltar
          </Button>
        </div>

        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-2xl md:text-3xl">Comportamentos de Segurança</CardTitle>
                <CardDescription className="text-base mt-2">
                  Identificar estratégias de evitação e comportamentos protetores
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-8">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Os comportamentos de segurança são estratégias que usamos para nos sentir protegidos da ansiedade. 
                Embora possam proporcionar alívio temporário, muitas vezes mantêm e reforçam os medos. Identificá-los 
                é o primeiro passo para desenvolver formas mais saudáveis de lidar com a ansiedade.
              </p>
            </div>

            <section className="bg-muted/30 rounded-lg p-6 space-y-6">
              <h3 className="text-xl font-semibold text-primary">✓ Identifique os Seus Comportamentos</h3>
              <p className="text-sm text-muted-foreground">
                Marque os comportamentos de segurança que reconhece em si mesmo:
              </p>
              
              <div className="space-y-4">
                {comportamentos.map((comp) => (
                  <div key={comp.id} className="flex items-start space-x-3 p-3 bg-background rounded-lg">
                    <Checkbox
                      id={comp.id}
                      checked={comportamentosIdentificados.includes(comp.id)}
                      onCheckedChange={(checked) => handleCheckChange(comp.id, checked as boolean)}
                      className="mt-1"
                    />
                    <label htmlFor={comp.id} className="text-sm font-medium cursor-pointer flex-1">
                      {comp.label}
                    </label>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-xl font-semibold text-primary">📝 Aprofunde a Sua Reflexão</h3>
              
              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  O que tem evitado fazer devido à ansiedade?
                </Label>
                <Textarea
                  value={respostas.evitacao}
                  onChange={(e) => handleTextChange('evitacao', e.target.value)}
                  placeholder="Liste situações, atividades ou experiências que tem evitado..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  Quais compromissos tem desmarcado? O que tem classificado como "Isto não é para mim"?
                </Label>
                <Textarea
                  value={respostas.compromissos}
                  onChange={(e) => handleTextChange('compromissos', e.target.value)}
                  placeholder="Descreva situações que cancelou ou evitou por ansiedade..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  Evita tomar decisões importantes por medo de cometer erros?
                </Label>
                <Textarea
                  value={respostas.decisoes}
                  onChange={(e) => handleTextChange('decisoes', e.target.value)}
                  placeholder="Que decisões tem adiado? Como isso afeta a sua vida?"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  Procura constantemente informações e garantias para reduzir a incerteza e a ansiedade?
                </Label>
                <Textarea
                  value={respostas.informacoes}
                  onChange={(e) => handleTextChange('informacoes', e.target.value)}
                  placeholder="Como e onde procura estas garantias? Com que frequência?"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  Procura constantemente a aprovação dos outros para se sentir seguro(a)?
                </Label>
                <Textarea
                  value={respostas.aprovacao}
                  onChange={(e) => handleTextChange('aprovacao', e.target.value)}
                  placeholder="De quem procura aprovação? Em que situações?"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  Tem rituais ou compulsões que precisa realizar para reduzir a ansiedade?
                </Label>
                <Textarea
                  value={respostas.rituais}
                  onChange={(e) => handleTextChange('rituais', e.target.value)}
                  placeholder="Descreva os rituais... Com que frequência os realiza?"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  Evita falar em público ou participar de eventos sociais por causa da ansiedade?
                </Label>
                <Textarea
                  value={respostas.falarPublico}
                  onChange={(e) => handleTextChange('falarPublico', e.target.value)}
                  placeholder="Que situações sociais evita? Qual o impacto na sua vida?"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  Verifica constantemente o seu corpo em busca de sintomas físicos relacionados à ansiedade?
                </Label>
                <Textarea
                  value={respostas.verificacaoCorpo}
                  onChange={(e) => handleTextChange('verificacaoCorpo', e.target.value)}
                  placeholder="Que sintomas procura? Com que frequência verifica?"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4 bg-muted/20 rounded-lg p-5">
                <Label className="text-base font-semibold">
                  Outros comportamentos de segurança que identificou:
                </Label>
                <Textarea
                  value={respostas.outros}
                  onChange={(e) => handleTextChange('outros', e.target.value)}
                  placeholder="Descreva quaisquer outros comportamentos protetores que utiliza..."
                  className="min-h-[100px]"
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

export default ComportamentosSeguranca;
