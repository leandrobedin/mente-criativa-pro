import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import PrintHeader from "@/components/PrintHeader";
import { AlertTriangle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Pergunta {
  id: string;
  texto: string;
}

const InvestigandoPreocupacoes = () => {
  const [respostas, setRespostas] = useState<{[key: string]: string}>({});

  const perguntas: Pergunta[] = [
    {
      id: "p1",
      texto: "Geralmente, preocupa-se com coisas com as quais a maioria das pessoas não se preocupa?"
    },
    {
      id: "p2",
      texto: "Preocupa-se com coisas com as quais os outros se preocupam (como a segurança dos seus filhos), mas de maneira mais exagerada?"
    },
    {
      id: "p3",
      texto: "Preocupa-se a maior parte do tempo sem nunca chegar a uma possível solução para um determinado problema?"
    },
    {
      id: "p4",
      texto: "Foca em desfechos negativos, com pensamentos catastróficos?"
    },
    {
      id: "p5",
      texto: "Sente aumento da ansiedade com vários sintomas ansiosos, como tensão muscular, cansaço, fadiga, inquietação, insónia e outros sintomas?"
    },
    {
      id: "p6",
      texto: "Tem dificuldade em aceitar riscos e incerteza, e tenta agir de modo que o pior não aconteça?"
    },
    {
      id: "p7",
      texto: "Sente que precisa ter certeza de tudo, para que algo não acabe mal?"
    },
    {
      id: "p8",
      texto: "Está sempre a tentar procurar a solução perfeita, para se sentir seguro(a) e aliviado(a)?"
    },
    {
      id: "p9",
      texto: "Frequentemente, procura evitar as preocupações, mas não consegue controlá-las e sente-se ainda mais preocupado(a)?"
    },
    {
      id: "p10",
      texto: "Preocupa-se pelo facto de não conseguir reduzir as suas próprias preocupações?"
    }
  ];

  const handleResponseChange = (perguntaId: string, valor: string) => {
    setRespostas(prev => ({ ...prev, [perguntaId]: valor }));
  };

  const calcularResultado = () => {
    const simCount = Object.values(respostas).filter(r => r === "sim").length;
    return simCount;
  };

  const getResultadoMensagem = () => {
    const simCount = calcularResultado();
    const totalRespondidas = Object.keys(respostas).length;
    
    if (totalRespondidas < perguntas.length) {
      return {
        tipo: "info",
        mensagem: `Respondeu ${totalRespondidas} de ${perguntas.length} perguntas. Complete todas para ver a análise.`
      };
    }

    if (simCount === perguntas.length) {
      return {
        tipo: "warning",
        mensagem: "Todas as suas respostas foram 'Sim'. É provável que tenha uma tendência a ter preocupações inúteis (improdutivas). Considere procurar apoio profissional para desenvolver estratégias de gestão da ansiedade."
      };
    } else if (simCount >= 7) {
      return {
        tipo: "warning",
        mensagem: "A maioria das suas respostas foram 'Sim'. Isto pode indicar uma tendência para preocupações excessivas. Seria benéfico discutir estas preocupações com um profissional de saúde mental."
      };
    } else if (simCount >= 4) {
      return {
        tipo: "caution",
        mensagem: "Identificou alguns padrões de preocupação que podem ser improdutivos. Continue a monitorizar as suas preocupações e considere desenvolver estratégias para as gerir de forma mais eficaz."
      };
    } else {
      return {
        tipo: "success",
        mensagem: "Parece ter um nível mais equilibrado de preocupações. Continue a praticar estratégias saudáveis de gestão da ansiedade."
      };
    }
  };

  const handleSave = () => {
    toast.success("Respostas guardadas com sucesso!");
  };

  const handlePrint = () => {
    window.print();
  };

  const resultado = getResultadoMensagem();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <PrintHeader title="Investigando Minhas Preocupações" />
        
        <div className="print:hidden">
          <Button variant="outline" onClick={() => window.history.back()} className="mb-4">
            ← Voltar
          </Button>
        </div>

        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-2xl md:text-3xl">Investigando as Preocupações</CardTitle>
                <CardDescription className="text-base mt-2">
                  Identificar se as preocupações são úteis ou inúteis
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-8">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Ao identificar se as suas preocupações são úteis (produtivas) ou inúteis (improdutivas), é possível 
                determinar se tem uma tendência a ter preocupações improdutivas. Responda <strong>Sim</strong> ou{" "}
                <strong>Não</strong> a cada pergunta.
              </p>
            </div>

            <div className="space-y-6">
              {perguntas.map((pergunta, index) => (
                <div key={pergunta.id} className="bg-muted/20 rounded-lg p-5 space-y-3">
                  <Label className="text-base font-medium">
                    {index + 1}. {pergunta.texto}
                  </Label>
                  <RadioGroup
                    value={respostas[pergunta.id] || ""}
                    onValueChange={(value) => handleResponseChange(pergunta.id, value)}
                  >
                    <div className="flex items-center space-x-6 mt-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id={`${pergunta.id}-sim`} />
                        <Label htmlFor={`${pergunta.id}-sim`} className="cursor-pointer font-normal">
                          Sim
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id={`${pergunta.id}-nao`} />
                        <Label htmlFor={`${pergunta.id}-nao`} className="cursor-pointer font-normal">
                          Não
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              ))}
            </div>

            {Object.keys(respostas).length > 0 && (
              <Alert className={`
                ${resultado.tipo === "warning" ? "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800" : ""}
                ${resultado.tipo === "caution" ? "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800" : ""}
                ${resultado.tipo === "success" ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800" : ""}
                ${resultado.tipo === "info" ? "bg-muted/50 border-muted" : ""}
              `}>
                <AlertDescription className={`
                  ${resultado.tipo === "warning" ? "text-amber-900 dark:text-amber-200" : ""}
                  ${resultado.tipo === "caution" ? "text-blue-900 dark:text-blue-200" : ""}
                  ${resultado.tipo === "success" ? "text-green-900 dark:text-green-200" : ""}
                  ${resultado.tipo === "info" ? "text-muted-foreground" : ""}
                `}>
                  <p className="font-medium mb-2">
                    📊 Análise: {calcularResultado()} de {perguntas.length} respostas "Sim"
                  </p>
                  <p>{resultado.mensagem}</p>
                </AlertDescription>
              </Alert>
            )}

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

export default InvestigandoPreocupacoes;
