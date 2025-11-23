import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Printer, Save, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Solucao {
  descricao: string;
  vantagens: string;
  desvantagens: string;
  nota: string;
}

const SolucaoProblemas = () => {
  const { toast } = useToast();
  const [problema, setProblema] = useState("");
  const [solucoes, setSolucoes] = useState<Solucao[]>([
    { descricao: "", vantagens: "", desvantagens: "", nota: "" }
  ]);
  const [opcaoEscolhida, setOpcaoEscolhida] = useState("");
  const [etapas, setEtapas] = useState("");
  const [pensamentosDisfuncionais, setPensamentosDisfuncionais] = useState("");
  const [evidenciasContra, setEvidenciasContra] = useState("");
  const [avaliacaoFinal, setAvaliacaoFinal] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("solucao-problemas");
    if (saved) {
      const data = JSON.parse(saved);
      setProblema(data.problema || "");
      setSolucoes(data.solucoes || [{ descricao: "", vantagens: "", desvantagens: "", nota: "" }]);
      setOpcaoEscolhida(data.opcaoEscolhida || "");
      setEtapas(data.etapas || "");
      setPensamentosDisfuncionais(data.pensamentosDisfuncionais || "");
      setEvidenciasContra(data.evidenciasContra || "");
      setAvaliacaoFinal(data.avaliacaoFinal || "");
    }
  }, []);

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const handleSave = () => {
    localStorage.setItem("solucao-problemas", JSON.stringify({
      problema, solucoes, opcaoEscolhida, etapas, pensamentosDisfuncionais, evidenciasContra, avaliacaoFinal
    }));
    toast({ title: "Guardado com sucesso" });
  };

  const addSolucao = () => {
    setSolucoes([...solucoes, { descricao: "", vantagens: "", desvantagens: "", nota: "" }]);
  };

  const updateSolucao = (index: number, campo: keyof Solucao, valor: string) => {
    const novas = [...solucoes];
    novas[index] = { ...novas[index], [campo]: valor };
    setSolucoes(novas);
  };

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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-growth/10 mb-4">
            <Lightbulb className="w-8 h-8 text-therapeutic-growth" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">Solução de Problemas</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Abordagem estruturada para encontrar soluções eficazes e tomar decisões informadas
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm space-y-8">
          <div>
            <Label className="text-lg font-semibold mb-3 block">1. Detalhe o problema de maneira específica</Label>
            <Textarea 
              value={problema}
              onChange={(e) => setProblema(e.target.value)}
              placeholder="Descreva o problema de forma clara e específica..."
              className="min-h-[120px]"
            />
          </div>

          <div>
            <Label className="text-lg font-semibold mb-2 block">2. Quais são todas as possíveis soluções para este problema?</Label>
            <p className="text-sm text-muted-foreground mb-4">Identifique diversas ações específicas que estão ao seu alcance imediato.</p>
            <div className="space-y-6">
              {solucoes.map((solucao, idx) => (
                <Card key={idx} className="p-6 bg-muted/30 space-y-4">
                  <div>
                    <Label className="font-semibold">Solução {idx + 1}</Label>
                    <Textarea
                      value={solucao.descricao}
                      onChange={(e) => updateSolucao(idx, "descricao", e.target.value)}
                      placeholder="Descreva a solução..."
                      className="min-h-[80px] mt-2"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Vantagens</Label>
                      <Textarea
                        value={solucao.vantagens}
                        onChange={(e) => updateSolucao(idx, "vantagens", e.target.value)}
                        placeholder="Vantagens desta solução..."
                        className="min-h-[100px]"
                      />
                    </div>
                    <div>
                      <Label>Desvantagens</Label>
                      <Textarea
                        value={solucao.desvantagens}
                        onChange={(e) => updateSolucao(idx, "desvantagens", e.target.value)}
                        placeholder="Desvantagens desta solução..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Nota de Eficácia (0-10)</Label>
                    <Input
                      type="number"
                      min="0"
                      max="10"
                      value={solucao.nota}
                      onChange={(e) => updateSolucao(idx, "nota", e.target.value)}
                      placeholder="Atribua uma nota..."
                    />
                  </div>
                </Card>
              ))}
              <Button onClick={addSolucao} variant="outline" className="w-full">+ Adicionar solução</Button>
            </div>
          </div>

          <Card className="bg-therapeutic-trust/5 p-6 border-therapeutic-trust/20">
            <h3 className="font-semibold text-foreground mb-2">Se eu aconselhasse um amigo nesta situação, o que diria?</h3>
            <p className="text-sm text-muted-foreground">
              Adote uma perspectiva compassiva e objetiva ao se aconselhar, assim como faria com um amigo.
            </p>
          </Card>

          <div>
            <Label className="text-lg font-semibold mb-2 block">3. Qual é a opção que deseja implementar?</Label>
            <p className="text-sm text-muted-foreground mb-3">Divida o problema em etapas menores e crie um plano concreto.</p>
            <Textarea
              value={opcaoEscolhida}
              onChange={(e) => setOpcaoEscolhida(e.target.value)}
              placeholder="Opção escolhida..."
              className="min-h-[80px] mb-4"
            />
            <Label className="font-semibold">Quais são as etapas que pode seguir?</Label>
            <Textarea
              value={etapas}
              onChange={(e) => setEtapas(e.target.value)}
              placeholder="Liste as etapas do seu plano de ação..."
              className="min-h-[120px] mt-2"
            />
          </div>

          <div>
            <Label className="text-lg font-semibold mb-2 block">4. Tem pensamentos que estão a atrapalhar a solução deste problema?</Label>
            <Textarea
              value={pensamentosDisfuncionais}
              onChange={(e) => setPensamentosDisfuncionais(e.target.value)}
              placeholder="Identifique pensamentos disfuncionais..."
              className="min-h-[100px] mb-4"
            />
            <Label className="font-semibold">Quais evidências existem que contestam esses pensamentos?</Label>
            <Textarea
              value={evidenciasContra}
              onChange={(e) => setEvidenciasContra(e.target.value)}
              placeholder="Liste as evidências contra esses pensamentos..."
              className="min-h-[100px] mt-2"
            />
          </div>

          <div>
            <Label className="text-lg font-semibold mb-2 block">5. Avalie a eficácia da solução escolhida (0-10)</Label>
            <p className="text-sm text-muted-foreground mb-3">
              Se a solução escolhida não foi satisfatória, retorne à segunda etapa e selecione outra alternativa.
            </p>
            <Input
              type="number"
              min="0"
              max="10"
              value={avaliacaoFinal}
              onChange={(e) => setAvaliacaoFinal(e.target.value)}
              placeholder="Avaliação final..."
              className="max-w-xs"
            />
          </div>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: Beck, J. S. Terapia Cognitivo-Comportamental: Teoria e Prática (3ª ed.). Porto Alegre: Artmed, 2022, p. 244, 322-323.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default SolucaoProblemas;
