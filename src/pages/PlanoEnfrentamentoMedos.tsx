import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, Mountain, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PrintHeader from "@/components/PrintHeader";

interface SituacaoTemida {
  id: string;
  situacao: string;
  nivel: string;
}

interface PassoEnfrentamento {
  id: string;
  passo: string;
  nivel: string;
}

const PlanoEnfrentamentoMedos = () => {
  const { toast } = useToast();
  const [reflexaoInicial, setReflexaoInicial] = useState({ semPensar: "", semMedo: "" });
  const [situacoesTemidas, setSituacoesTemidas] = useState<SituacaoTemida[]>([]);
  const [medoEscolhido, setMedoEscolhido] = useState("");
  const [metaObjetivo, setMetaObjetivo] = useState("");
  const [passosEnfrentamento, setPassosEnfrentamento] = useState<PassoEnfrentamento[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("plano-enfrentamento-medos");
    if (saved) {
      const data = JSON.parse(saved);
      setReflexaoInicial(data.reflexaoInicial || { semPensar: "", semMedo: "" });
      setSituacoesTemidas(data.situacoesTemidas || []);
      setMedoEscolhido(data.medoEscolhido || "");
      setMetaObjetivo(data.metaObjetivo || "");
      setPassosEnfrentamento(data.passosEnfrentamento || []);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("plano-enfrentamento-medos", JSON.stringify({
      reflexaoInicial, situacoesTemidas, medoEscolhido, metaObjetivo, passosEnfrentamento
    }));
    toast({ title: "Guardado com sucesso" });
  };

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const adicionarSituacao = () => {
    setSituacoesTemidas([...situacoesTemidas, { id: Date.now().toString(), situacao: "", nivel: "" }]);
  };

  const removerSituacao = (id: string) => {
    setSituacoesTemidas(situacoesTemidas.filter(s => s.id !== id));
  };

  const atualizarSituacao = (id: string, campo: 'situacao' | 'nivel', valor: string) => {
    setSituacoesTemidas(situacoesTemidas.map(s => 
      s.id === id ? { ...s, [campo]: valor } : s
    ));
  };

  const adicionarPasso = () => {
    setPassosEnfrentamento([...passosEnfrentamento, { id: Date.now().toString(), passo: "", nivel: "" }]);
  };

  const removerPasso = (id: string) => {
    setPassosEnfrentamento(passosEnfrentamento.filter(p => p.id !== id));
  };

  const atualizarPasso = (id: string, campo: 'passo' | 'nivel', valor: string) => {
    setPassosEnfrentamento(passosEnfrentamento.map(p => 
      p.id === id ? { ...p, [campo]: valor } : p
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PrintHeader title="Construindo o Meu Plano de Enfrentamento de Medos" />
      
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

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-growth/10 mb-4">
            <Mountain className="w-8 h-8 text-therapeutic-growth" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Construindo o Meu Plano de Enfrentamento de Medos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crie um plano estruturado e gradual para enfrentar os seus medos e avançar na sua vida
          </p>
        </div>

        <Card className="p-6 mb-8 bg-therapeutic-growth/5 border-therapeutic-growth/20">
          <h3 className="font-semibold text-foreground mb-2">Como funciona este plano?</h3>
          <p className="text-sm text-muted-foreground">
            Este exercício ajuda-o a identificar os medos que o impedem de avançar e a criar um plano gradual 
            de enfrentamento. Começará pelos medos mais "fáceis" e progredirá gradualmente, construindo confiança 
            a cada passo.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6 bg-card/80 backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-bold text-primary">1</span>
              </div>
              <Label className="text-lg font-semibold">Reflexão Inicial</Label>
            </div>
            
            <div className="space-y-4 ml-13">
              <div>
                <Label>O que gostaria de fazer sem pensar demais?</Label>
                <Textarea
                  value={reflexaoInicial.semPensar}
                  onChange={(e) => setReflexaoInicial(prev => ({ ...prev, semPensar: e.target.value }))}
                  placeholder="Liste atividades ou situações que evita por pensar demais nelas..."
                  className="min-h-[100px] mt-2"
                />
              </div>

              <div>
                <Label>O que faria se não tivesse medo?</Label>
                <Textarea
                  value={reflexaoInicial.semMedo}
                  onChange={(e) => setReflexaoInicial(prev => ({ ...prev, semMedo: e.target.value }))}
                  placeholder="Imagine-se livre de medos. O que faria? Onde iria? Como viveria?"
                  className="min-h-[100px] mt-2"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold text-primary">2</span>
                </div>
                <Label className="text-lg font-semibold">Situações Temidas e Nível de Ansiedade</Label>
              </div>
              <Button onClick={adicionarSituacao} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar
              </Button>
            </div>

            <div className="ml-13">
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Níveis:</strong> Leve (0-3) ainda consigo lidar | Moderado (4-7) difícil concentrar | 
                Alto (8-10) ansiedade esmagadora
              </p>

              <div className="space-y-3">
                {situacoesTemidas.map((situacao) => (
                  <div key={situacao.id} className="flex gap-2">
                    <Input
                      value={situacao.situacao}
                      onChange={(e) => atualizarSituacao(situacao.id, 'situacao', e.target.value)}
                      placeholder="Situação temida..."
                      className="flex-1"
                    />
                    <Input
                      value={situacao.nivel}
                      onChange={(e) => atualizarSituacao(situacao.id, 'nivel', e.target.value)}
                      placeholder="0-10"
                      className="w-20"
                      type="number"
                      min="0"
                      max="10"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removerSituacao(situacao.id)}
                      className="flex-shrink-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur-sm space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-bold text-primary">3</span>
              </div>
              <Label className="text-lg font-semibold">Escolha um Medo para Enfrentar</Label>
            </div>

            <div className="ml-13 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Escolha um medo por vez, começando pelo de menor nível (mais "fácil") da sua lista
                </p>
                <Input
                  value={medoEscolhido}
                  onChange={(e) => setMedoEscolhido(e.target.value)}
                  placeholder="Ex: Falar em reuniões (nível 4)"
                />
              </div>

              <div>
                <Label>Transforme a situação numa meta que gostaria de alcançar</Label>
                <Textarea
                  value={metaObjetivo}
                  onChange={(e) => setMetaObjetivo(e.target.value)}
                  placeholder="Ex: Conseguir partilhar as minhas ideias em reuniões de equipa, começando por pequenos comentários"
                  className="min-h-[80px] mt-2"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-therapeutic-growth/5 border-therapeutic-growth/20 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-therapeutic-growth/20 flex items-center justify-center">
                  <span className="font-bold text-therapeutic-growth">4</span>
                </div>
                <Label className="text-lg font-semibold">Hierarquia de Passos (do Mais Fácil ao Mais Difícil)</Label>
              </div>
              <Button onClick={adicionarPasso} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Passo
              </Button>
            </div>

            <div className="ml-13">
              <p className="text-sm text-muted-foreground mb-4">
                Defina passos realistas, mensuráveis e específicos. Ex: "Vou conduzir por 1 hora no meu bairro" 
                em vez de "Vou conduzir por horas"
              </p>

              <div className="space-y-3">
                {passosEnfrentamento.map((passo, idx) => (
                  <div key={passo.id} className="flex gap-2 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-therapeutic-growth/20 flex items-center justify-center mt-2">
                      <span className="text-xs font-semibold text-therapeutic-growth">{idx + 1}</span>
                    </div>
                    <Textarea
                      value={passo.passo}
                      onChange={(e) => atualizarPasso(passo.id, 'passo', e.target.value)}
                      placeholder="Descreva o passo específico..."
                      className="flex-1 min-h-[80px]"
                    />
                    <Input
                      value={passo.nivel}
                      onChange={(e) => atualizarPasso(passo.id, 'nivel', e.target.value)}
                      placeholder="0-10"
                      className="w-20 mt-2"
                      type="number"
                      min="0"
                      max="10"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removerPasso(passo.id)}
                      className="flex-shrink-0 mt-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20 mt-8">
          <h3 className="font-semibold text-foreground mb-2">Lembre-se</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Comece sempre pelo passo mais fácil e vá progredindo gradualmente</li>
            <li>• Pratique cada passo várias vezes antes de avançar para o próximo</li>
            <li>• É normal sentir ansiedade durante o enfrentamento - isso faz parte do processo</li>
            <li>• Celebre cada pequena vitória ao longo do caminho</li>
            <li>• Se um passo parecer muito difícil, divida-o em passos ainda menores</li>
          </ul>
        </Card>

        <Card className="p-6 bg-muted/30 mt-6">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: CLARK, David A.; BECK, Aaron T. Vencendo a ansiedade e a preocupação com a terapia cognitivo-comportamental. Porto Alegre: Artmed, 2014, p. 139.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default PlanoEnfrentamentoMedos;
