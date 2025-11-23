import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Sintoma {
  id: number;
  descricao: string;
  valor: string;
}

const MonitoramentoAnsiedade = () => {
  const { toast } = useToast();
  
  const sintomas: Omit<Sintoma, 'valor'>[] = [
    { id: 1, descricao: "Preocupação excessiva com eventos futuros, mesmo que sejam improváveis" },
    { id: 2, descricao: "Tendência a ficar facilmente irritado ou tenso" },
    { id: 3, descricao: "Incapacidade de relaxar ou ficar quieto" },
    { id: 4, descricao: "Cansaço persistente, muitas vezes sem uma razão aparente" },
    { id: 5, descricao: "Dificuldade em manter o foco em tarefas específicas" },
    { id: 6, descricao: "Tensão muscular frequente, dores musculares" },
    { id: 7, descricao: "Dificuldade em adormecer, permanecer a dormir ou ter um sono reparador" },
    { id: 8, descricao: "Medos intensos e irracionais de objetos, situações ou atividades específicas" },
    { id: 9, descricao: "Transpiração intensificada, não relacionada ao esforço físico" },
    { id: 10, descricao: "Movimentos involuntários, como tremores nas mãos ou noutras partes do corpo" },
    { id: 11, descricao: "Batimentos cardíacos rápidos ou irregulares" },
    { id: 12, descricao: "Sensação persistente de secura na boca" },
    { id: 13, descricao: "Desconforto abdominal, náusea ou diarreia" },
    { id: 14, descricao: "Sentimento de estar desconectado da realidade ou de si mesmo" },
    { id: 15, descricao: "Tonturas ou vertigens" },
    { id: 16, descricao: "Pensamentos constantes de desastres ou eventos negativos" },
    { id: 17, descricao: "Evitação de lugares ou atividades que causem ansiedade" },
    { id: 18, descricao: "Experimentando uma sensação persistente de falta de ar" },
    { id: 19, descricao: "Episódios recorrentes de rubores (calores) ou calafrios" },
  ];

  const [respostas, setRespostas] = useState<Record<number, string>>({});

  useEffect(() => {
    const saved = localStorage.getItem("monitoramento-ansiedade");
    if (saved) {
      setRespostas(JSON.parse(saved));
    }
  }, []);

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const handleSave = () => {
    localStorage.setItem("monitoramento-ansiedade", JSON.stringify(respostas));
    toast({ title: "Guardado com sucesso" });
  };

  const calcularTotal = () => {
    return Object.values(respostas).reduce((total, valor) => total + parseInt(valor || "0"), 0);
  };

  const interpretarResultado = (total: number) => {
    if (total <= 19) return { nivel: "Leve", cor: "text-therapeutic-growth", bg: "bg-therapeutic-growth/5" };
    if (total <= 38) return { nivel: "Moderado", cor: "text-therapeutic-warmth", bg: "bg-therapeutic-warmth/5" };
    return { nivel: "Grave", cor: "text-destructive", bg: "bg-destructive/5" };
  };

  const total = calcularTotal();
  const resultado = interpretarResultado(total);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50 no-print">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/"><Button variant="ghost" size="sm"><ArrowLeft className="h-4 w-4 mr-2" />Voltar</Button></Link>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Guardar</Button>
              <Button variant="outline" size="sm" onClick={handlePrint}><Printer className="h-4 w-4 mr-2" />Imprimir</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-calm/10 mb-4">
            <Activity className="w-8 h-8 text-therapeutic-calm" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">Identificação de Sintomas e Monitoramento da Ansiedade</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Avaliação dos sintomas comuns de ansiedade e monitoramento do progresso no tratamento
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm space-y-6">
          <Card className="bg-therapeutic-calm/5 p-6 border-therapeutic-calm/20">
            <h3 className="font-semibold text-foreground mb-2">Instruções</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Esta ferramenta proporciona uma avaliação dos sintomas comuns de ansiedade, monitorizando o progresso 
              na redução desses sintomas. Pode ser utilizada de forma independente ou preenchida em conjunto com o 
              psicoterapeuta. Recomenda-se preenchê-la regularmente, em intervalos fixos, conforme orientação profissional.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              <strong>Pontuação:</strong> 0 = Nunca ou raramente | 1 = Às vezes | 2 = Com frequência | 3 = Com muita frequência
            </p>
          </Card>

          <div className="space-y-6">
            <Label className="text-lg font-semibold block">
              Selecione a opção que melhor descreve a intensidade de cada sintoma ao longo da última semana:
            </Label>
            
            {sintomas.map((sintoma) => (
              <Card key={sintoma.id} className="p-6 bg-muted/20">
                <div className="space-y-4">
                  <Label className="text-base font-medium block">
                    {sintoma.id}. {sintoma.descricao}
                  </Label>
                  <RadioGroup
                    value={respostas[sintoma.id] || ""}
                    onValueChange={(value) => setRespostas({ ...respostas, [sintoma.id]: value })}
                    className="flex gap-6 flex-wrap"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0" id={`s${sintoma.id}-0`} />
                      <Label htmlFor={`s${sintoma.id}-0`} className="cursor-pointer">Nunca ou raramente</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id={`s${sintoma.id}-1`} />
                      <Label htmlFor={`s${sintoma.id}-1`} className="cursor-pointer">Às vezes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id={`s${sintoma.id}-2`} />
                      <Label htmlFor={`s${sintoma.id}-2`} className="cursor-pointer">Com frequência</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id={`s${sintoma.id}-3`} />
                      <Label htmlFor={`s${sintoma.id}-3`} className="cursor-pointer">Com muita frequência</Label>
                    </div>
                  </RadioGroup>
                </div>
              </Card>
            ))}
          </div>

          <Card className={`p-6 ${resultado.bg} border-2`}>
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-bold text-foreground">Pontuação Total: {total}</h3>
              <p className={`text-xl font-semibold ${resultado.cor}`}>Nível de Ansiedade: {resultado.nivel}</p>
              <div className="pt-4 text-sm text-muted-foreground">
                <p><strong>Interpretação:</strong></p>
                <p className="mt-2">0-19 pontos: Ansiedade Leve</p>
                <p>20-38 pontos: Ansiedade Moderada</p>
                <p>39-57 pontos: Ansiedade Grave</p>
              </div>
            </div>
          </Card>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Esta ferramenta é complementar ao acompanhamento profissional e não substitui o diagnóstico clínico.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default MonitoramentoAnsiedade;
