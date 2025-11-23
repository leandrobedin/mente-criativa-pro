import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Printer, Save, BookOpen, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PrintHeader from "@/components/PrintHeader";

interface RegistoPreocupacao {
  id: string;
  dataHora: string;
  gatilho: string;
  pensamentoInicial: string;
  conteudoPreocupacao: string;
  duracao: string;
  intensidade: string;
  tipo: string;
  acoes: string;
}

const DiarioPreocupacoes = () => {
  const { toast } = useToast();
  const [registos, setRegistos] = useState<RegistoPreocupacao[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("diario-preocupacoes");
    if (saved) {
      setRegistos(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("diario-preocupacoes", JSON.stringify(registos));
    toast({ title: "Guardado com sucesso" });
  };

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const adicionarRegisto = () => {
    const novoRegisto: RegistoPreocupacao = {
      id: Date.now().toString(),
      dataHora: new Date().toISOString().slice(0, 16),
      gatilho: "",
      pensamentoInicial: "",
      conteudoPreocupacao: "",
      duracao: "",
      intensidade: "",
      tipo: "",
      acoes: ""
    };
    setRegistos([novoRegisto, ...registos]);
  };

  const removerRegisto = (id: string) => {
    setRegistos(registos.filter(r => r.id !== id));
  };

  const atualizarRegisto = (id: string, campo: keyof RegistoPreocupacao, valor: string) => {
    setRegistos(registos.map(r => 
      r.id === id ? { ...r, [campo]: valor } : r
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PrintHeader title="Diário de Preocupações" />
      
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-trust/10 mb-4">
            <BookOpen className="w-8 h-8 text-therapeutic-trust" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Diário de Preocupações
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitorize as suas preocupações para compreender padrões e distinguir preocupações produtivas de improdutivas
          </p>
        </div>

        <Card className="p-6 mb-8 bg-therapeutic-trust/5 border-therapeutic-trust/20">
          <h3 className="font-semibold text-foreground mb-3">Preocupações Produtivas vs. Improdutivas</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-therapeutic-growth/5 p-4 rounded-lg border border-therapeutic-growth/20">
              <p className="font-semibold text-therapeutic-growth mb-2">Preocupações Produtivas</p>
              <p className="text-muted-foreground">
                Envolvem questões tangíveis e solucionáveis. São concretas, focadas no presente ou futuro próximo, 
                e podem ser resolvidas com ações práticas. Ex: Elaborar um plano para pagar dívidas.
              </p>
            </div>
            <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
              <p className="font-semibold text-destructive mb-2">Preocupações Improdutivas</p>
              <p className="text-muted-foreground">
                Relacionadas a cenários hipotéticos e incontroláveis. São abstratas, focadas em "e se...?", 
                e não podem ser resolvidas com ações. Ex: Preocupar-se constantemente com acidentes improváveis.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-foreground">Registos de Preocupações</h3>
          <Button onClick={adicionarRegisto}>
            <Plus className="h-4 w-4 mr-2" />
            Novo Registo
          </Button>
        </div>

        <div className="space-y-6">
          {registos.length === 0 ? (
            <Card className="p-12 text-center bg-muted/30">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">Ainda não há registos de preocupações</p>
              <Button onClick={adicionarRegisto} variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Criar Primeiro Registo
              </Button>
            </Card>
          ) : (
            registos.map((registo) => (
              <Card key={registo.id} className="p-6 bg-card/80 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <Label className="text-lg font-semibold">Registo de Preocupação</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removerRegisto(registo.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid gap-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm">Data e Hora</Label>
                      <Input
                        type="datetime-local"
                        value={registo.dataHora}
                        onChange={(e) => atualizarRegisto(registo.id, 'dataHora', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">Duração da Preocupação</Label>
                      <Input
                        value={registo.duracao}
                        onChange={(e) => atualizarRegisto(registo.id, 'duracao', e.target.value)}
                        placeholder="Ex: 30 minutos, 2 horas"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm">Fator Desencadeante (Gatilho)</Label>
                    <Textarea
                      value={registo.gatilho}
                      onChange={(e) => atualizarRegisto(registo.id, 'gatilho', e.target.value)}
                      placeholder="O que aconteceu antes da preocupação surgir?"
                      className="min-h-[60px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm">Pensamento Inicial</Label>
                    <Textarea
                      value={registo.pensamentoInicial}
                      onChange={(e) => atualizarRegisto(registo.id, 'pensamentoInicial', e.target.value)}
                      placeholder="Que ideia passou pela sua mente que desencadeou a preocupação?"
                      className="min-h-[60px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm">Conteúdo da Preocupação</Label>
                    <Textarea
                      value={registo.conteudoPreocupacao}
                      onChange={(e) => atualizarRegisto(registo.id, 'conteudoPreocupacao', e.target.value)}
                      placeholder="O que estava a ocupar a sua mente nesse momento?"
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm">Intensidade do Desconforto (0-100)</Label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={registo.intensidade}
                        onChange={(e) => atualizarRegisto(registo.id, 'intensidade', e.target.value)}
                        placeholder="0 = Nenhum, 100 = Extremo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">Tipo de Preocupação</Label>
                      <Select
                        value={registo.tipo}
                        onValueChange={(valor) => atualizarRegisto(registo.id, 'tipo', valor)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="produtiva">Produtiva (solucionável)</SelectItem>
                          <SelectItem value="improdutiva">Improdutiva (hipotética)</SelectItem>
                          <SelectItem value="mista">Mista</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm">Como Está a Agir para Controlar a Situação?</Label>
                    <Textarea
                      value={registo.acoes}
                      onChange={(e) => atualizarRegisto(registo.id, 'acoes', e.target.value)}
                      placeholder="Que ações está a tomar ou planeia tomar?"
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20 mt-8">
          <h3 className="font-semibold text-foreground mb-2">Dicas para Usar o Diário</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Registe as preocupações assim que elas ocorrem, ou no final do dia</li>
            <li>• Seja específico sobre os gatilhos e o conteúdo das preocupações</li>
            <li>• Procure padrões: situações, horários ou temas recorrentes</li>
            <li>• Identifique se as preocupações são produtivas ou improdutivas</li>
            <li>• Use esta informação para desenvolver estratégias de enfrentamento específicas</li>
          </ul>
        </Card>

        <Card className="p-6 bg-muted/30 mt-6">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: CLARK, David A.; BECK, Aaron T. Vencendo a ansiedade e a preocupação com a terapia cognitivo-comportamental. Porto Alegre: Artmed, 2014, p. 130.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default DiarioPreocupacoes;
