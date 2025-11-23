import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, Target, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PrintHeader from "@/components/PrintHeader";

interface Item {
  id: string;
  texto: string;
}

const CirculoControle = () => {
  const { toast } = useToast();
  const [possoControlar, setPossoControlar] = useState<Item[]>([]);
  const [naoPossoControlar, setNaoPossoControlar] = useState<Item[]>([]);
  const [reflexao, setReflexao] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("circulo-controle");
    if (saved) {
      const data = JSON.parse(saved);
      setPossoControlar(data.possoControlar || []);
      setNaoPossoControlar(data.naoPossoControlar || []);
      setReflexao(data.reflexao || "");
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("circulo-controle", JSON.stringify({
      possoControlar, naoPossoControlar, reflexao
    }));
    toast({ title: "Guardado com sucesso" });
  };

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const adicionarItem = (lista: 'posso' | 'naoPosso') => {
    const novoItem: Item = { id: Date.now().toString(), texto: "" };
    if (lista === 'posso') {
      setPossoControlar([...possoControlar, novoItem]);
    } else {
      setNaoPossoControlar([...naoPossoControlar, novoItem]);
    }
  };

  const removerItem = (lista: 'posso' | 'naoPosso', id: string) => {
    if (lista === 'posso') {
      setPossoControlar(possoControlar.filter(item => item.id !== id));
    } else {
      setNaoPossoControlar(naoPossoControlar.filter(item => item.id !== id));
    }
  };

  const atualizarItem = (lista: 'posso' | 'naoPosso', id: string, texto: string) => {
    if (lista === 'posso') {
      setPossoControlar(possoControlar.map(item => 
        item.id === id ? { ...item, texto } : item
      ));
    } else {
      setNaoPossoControlar(naoPossoControlar.map(item => 
        item.id === id ? { ...item, texto } : item
      ));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PrintHeader title="Círculo do Controle" />
      
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-trust/10 mb-4">
            <Target className="w-8 h-8 text-therapeutic-trust" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Círculo do Controle
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Identifique o que está sob o seu controle e o que não está, para focar a sua energia no que realmente importa
          </p>
        </div>

        <Card className="p-6 mb-8 bg-therapeutic-trust/5 border-therapeutic-trust/20">
          <h3 className="font-semibold text-foreground mb-2">Como utilizar o Círculo do Controle</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Muitas vezes gastamos energia preocupando-nos com coisas que não podemos controlar (ações de outras pessoas, 
            o passado, o clima, a economia). Este exercício ajuda a distinguir entre o que está sob o seu controle 
            e o que não está.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Dentro do círculo:</strong> Coisas que pode controlar (as suas ações, pensamentos, escolhas, esforço).<br/>
            <strong>Fora do círculo:</strong> Coisas que não pode controlar (ações dos outros, o passado, fatores externos).
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-therapeutic-growth/5 border-therapeutic-growth/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-therapeutic-growth/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-therapeutic-growth" />
                </div>
                <Label className="text-lg font-semibold">Posso Controlar</Label>
              </div>
              <Button onClick={() => adicionarItem('posso')} size="sm" variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              As minhas ações, reações, escolhas, esforço, atitudes...
            </p>

            <div className="space-y-2">
              {possoControlar.map((item) => (
                <div key={item.id} className="flex gap-2">
                  <Input
                    value={item.texto}
                    onChange={(e) => atualizarItem('posso', item.id, e.target.value)}
                    placeholder="Ex: A minha resposta às situações"
                    className="flex-1"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removerItem('posso', item.id)}
                    className="flex-shrink-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              {possoControlar.length === 0 && (
                <p className="text-sm text-muted-foreground italic text-center py-4">
                  Clique em + para adicionar itens
                </p>
              )}
            </div>
          </Card>

          <Card className="p-6 bg-destructive/5 border-destructive/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <Label className="text-lg font-semibold">Não Posso Controlar</Label>
              </div>
              <Button onClick={() => adicionarItem('naoPosso')} size="sm" variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              Ações dos outros, o passado, fatores externos, opiniões alheias...
            </p>

            <div className="space-y-2">
              {naoPossoControlar.map((item) => (
                <div key={item.id} className="flex gap-2">
                  <Input
                    value={item.texto}
                    onChange={(e) => atualizarItem('naoPosso', item.id, e.target.value)}
                    placeholder="Ex: O que os outros pensam de mim"
                    className="flex-1"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removerItem('naoPosso', item.id)}
                    className="flex-shrink-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              {naoPossoControlar.length === 0 && (
                <p className="text-sm text-muted-foreground italic text-center py-4">
                  Clique em + para adicionar itens
                </p>
              )}
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20 space-y-3">
          <Label className="text-lg font-semibold">Reflexão: Onde vou focar a minha energia?</Label>
          <p className="text-sm text-muted-foreground">
            Agora que identificou o que está e não está sob o seu controle, como pode redirecionar a sua energia 
            para as coisas que realmente pode mudar?
          </p>
          <Textarea
            value={reflexao}
            onChange={(e) => setReflexao(e.target.value)}
            placeholder="Reflita sobre como esta distinção pode ajudá-lo a reduzir preocupações desnecessárias e focar no que realmente importa..."
            className="min-h-[120px]"
          />
        </Card>

        <Card className="p-6 bg-therapeutic-calm/5 border-therapeutic-calm/20 mt-6">
          <h3 className="font-semibold text-foreground mb-2">Dica Importante</h3>
          <p className="text-sm text-muted-foreground">
            Pode atualizar o seu círculo de controle ao longo do tempo. À medida que as situações mudam, 
            reveja e ajuste os seus itens. Mantenha o foco nas coisas que estão dentro do seu círculo de influência.
          </p>
        </Card>

        <Card className="p-6 bg-muted/30 mt-6">
          <p className="text-xs text-muted-foreground text-center">
            Adaptado de: COVEY, Stephen R. Os 7 Hábitos das Pessoas Altamente Eficazes. Rio de Janeiro: Best Seller, 2002.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default CirculoControle;
