import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Registro {
  data: string;
  situacao: string;
  pensamento: string;
  reacoes: string;
  distorcao: string;
}

const IdentificarDistorcoes = () => {
  const { toast } = useToast();
  const [registos, setRegistos] = useState<Registro[]>([
    { data: "", situacao: "", pensamento: "", reacoes: "", distorcao: "" }
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("identificar-distorcoes");
    if (saved) {
      setRegistos(JSON.parse(saved));
    }
  }, []);

  const distorcoesLegenda = [
    "1. Pensamento tudo ou nada: Pensamento em extremos (100% bom ou ruim)",
    "2. Catastrofização: Pensar no pior desfecho possível",
    "3. Desqualificação do positivo: Desconsiderar informações positivas",
    "4. Filtro mental: Focar apenas nos aspectos negativos",
    "5. Rotulação: Atribuir rótulos negativos sem considerar evidências contrárias",
    "6. Leitura mental: Presumir saber o que o outro pensa sem evidências",
    "7. Supergeneralização: Ver um padrão baseado em um único evento",
    "8. Raciocínio emocional: Presumir que os sentimentos refletem a realidade",
    "9. Afirmações \"deveria\" e \"tenho que\": Pensar sempre no que \"deve\" fazer",
    "10. Personalização: Atribuir culpa a si mesmo em diversas situações",
    "11. Comparações injustas: Comparar-se aos outros de forma desigual",
    "12. Culpabilização: Culpar os outros pelos seus problemas",
    "13. Tendência à lamentação: Focar no passado em vez de soluções presentes",
    "14. \"E se\": Focar excessivamente nas possibilidades negativas",
    "15. Incapacidade de refutar: Rejeitar evidências que desafiam pensamentos negativos",
    "16. Foco no julgamento: Avaliar constantemente em vez de descrever e aceitar"
  ];

  const handlePrint = () => {
    window.print();
    toast({
      title: "Pronto para imprimir",
      description: "A janela de impressão foi aberta",
    });
  };

  const handleSave = () => {
    localStorage.setItem("identificar-distorcoes", JSON.stringify(registos));
    toast({
      title: "Guardado com sucesso",
      description: "Os registos foram guardados localmente",
    });
  };

  const addRegistro = () => {
    setRegistos([...registos, { data: "", situacao: "", pensamento: "", reacoes: "", distorcao: "" }]);
  };

  const updateRegistro = (index: number, campo: keyof Registro, valor: string) => {
    const novos = [...registos];
    novos[index] = { ...novos[index], [campo]: valor };
    setRegistos(novos);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50 no-print">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Guardar
              </Button>
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" />
                Imprimir
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-warmth/10 mb-4">
            <AlertCircle className="w-8 h-8 text-therapeutic-warmth" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Identificando Distorções Cognitivas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Registe e identifique padrões de pensamento disfuncionais nas situações do quotidiano
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm">
          <div className="space-y-8">
            {/* Legenda */}
            <Card className="bg-therapeutic-warmth/5 p-6 border-therapeutic-warmth/20">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-therapeutic-warmth" />
                Legenda: Distorções Comuns no Pensamento
              </h3>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                {distorcoesLegenda.map((distorcao, index) => (
                  <p key={index} className="text-xs text-muted-foreground leading-relaxed">
                    {distorcao}
                  </p>
                ))}
              </div>
            </Card>

            {/* Registros */}
            {registos.map((registro, index) => (
              <Card key={index} className="p-6 bg-muted/30">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Registo {index + 1}
                </h3>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-foreground">
                        Data e Hora
                      </Label>
                      <p className="text-xs text-muted-foreground mb-2">
                        Quando isso aconteceu?
                      </p>
                      <Input
                        type="datetime-local"
                        value={registro.data}
                        onChange={(e) => updateRegistro(index, "data", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-foreground">
                        Situação
                      </Label>
                      <p className="text-xs text-muted-foreground mb-2">
                        Onde estava? Com quem? O que estava a fazer?
                      </p>
                      <Textarea
                        placeholder="Descreva a situação..."
                        value={registro.situacao}
                        onChange={(e) => updateRegistro(index, "situacao", e.target.value)}
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-foreground">
                      Pensamento Automático
                    </Label>
                    <p className="text-xs text-muted-foreground mb-2">
                      Como interpretou o que ocorreu? O que pensou naquele momento?
                    </p>
                    <Textarea
                      placeholder="Descreva o pensamento que teve..."
                      value={registro.pensamento}
                      onChange={(e) => updateRegistro(index, "pensamento", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-foreground">
                      Reações
                    </Label>
                    <p className="text-xs text-muted-foreground mb-2">
                      Emocional (avalie a intensidade de 0 a 100), comportamental e fisiológica
                    </p>
                    <Textarea
                      placeholder="Ex: Ansiedade (80/100), tremores, evitei a situação..."
                      value={registro.reacoes}
                      onChange={(e) => updateRegistro(index, "reacoes", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-foreground">
                      Distorção Cognitiva Identificada
                    </Label>
                    <p className="text-xs text-muted-foreground mb-2">
                      Identifique os erros no seu pensamento (consulte a legenda acima)
                    </p>
                    <Textarea
                      placeholder="Ex: Catastrofização (2), Leitura mental (6)..."
                      value={registro.distorcao}
                      onChange={(e) => updateRegistro(index, "distorcao", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
              </Card>
            ))}

            <Button onClick={addRegistro} variant="outline" className="w-full">
              + Adicionar novo registo
            </Button>
          </div>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: Beck, J. S. Terapia Cognitivo-Comportamental: Teoria e Prática (3ª ed.). Porto Alegre: Artmed, 2022, p. 250-251.
            <br />
            Leahy, R. L. Técnicas de Terapia Cognitiva: Manual do Terapeuta (2ª ed.). Porto Alegre: Artmed, 2019. p. 450-469.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default IdentificarDistorcoes;
