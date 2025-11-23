import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, Eye, Hand, Ear, Wind, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Autotranquilizacao = () => {
  const { toast } = useToast();
  const [ver, setVer] = useState<string[]>(Array(5).fill(""));
  const [tocar, setTocar] = useState<string[]>(Array(4).fill(""));
  const [ouvir, setOuvir] = useState<string[]>(Array(3).fill(""));
  const [cheirar, setCheirar] = useState<string[]>(Array(2).fill(""));
  const [saborear, setSaborear] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("autotranquilizacao");
    if (saved) {
      const data = JSON.parse(saved);
      setVer(data.ver || Array(5).fill(""));
      setTocar(data.tocar || Array(4).fill(""));
      setOuvir(data.ouvir || Array(3).fill(""));
      setCheirar(data.cheirar || Array(2).fill(""));
      setSaborear(data.saborear || "");
    }
  }, []);

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const handleSave = () => {
    localStorage.setItem("autotranquilizacao", JSON.stringify({
      ver, tocar, ouvir, cheirar, saborear
    }));
    toast({ title: "Guardado com sucesso" });
  };

  const updateArray = (setter: React.Dispatch<React.SetStateAction<string[]>>, index: number, value: string) => {
    setter(prev => {
      const novo = [...prev];
      novo[index] = value;
      return novo;
    });
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

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-calm/10 mb-4">
            <Wind className="w-8 h-8 text-therapeutic-calm" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">Autotranquilização 5-4-3-2-1</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Técnica dos cinco sentidos para acalmar o corpo em momentos de stress e ansiedade
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm space-y-8">
          <Card className="bg-therapeutic-calm/5 p-6 border-therapeutic-calm/20">
            <h3 className="font-semibold text-foreground mb-2">Como funciona esta técnica</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              É importante que saiba o que ajuda a acalmar o seu corpo, especialmente em momentos de crise. 
              Uma excelente maneira de se sentir mais tranquilo é envolver-se em atividades autocalmantes que 
              exploram os seus cinco sentidos. Esta técnica ajuda a ancorar-se no momento presente e a reduzir 
              a ansiedade através da consciência sensorial.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-therapeutic-calm/5 to-transparent border-therapeutic-calm/20">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-therapeutic-calm" />
              <Label className="text-lg font-semibold">5 coisas que pode VER</Label>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Exemplos: janelas, móveis, parede, imagens da natureza, figuras geométricas, fotos de família
            </p>
            <div className="space-y-3">
              {ver.map((item, idx) => (
                <Textarea
                  key={idx}
                  value={item}
                  onChange={(e) => updateArray(setVer, idx, e.target.value)}
                  placeholder={`${idx + 1}. O que vê à sua volta...`}
                  className="min-h-[60px]"
                />
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-therapeutic-growth/5 to-transparent border-therapeutic-growth/20">
            <div className="flex items-center gap-3 mb-4">
              <Hand className="w-6 h-6 text-therapeutic-growth" />
              <Label className="text-lg font-semibold">4 coisas que pode TOCAR</Label>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Exemplos: a cadeira onde está sentado, o chão, o seu animal de estimação, um tecido macio, bola anti-stress
            </p>
            <div className="space-y-3">
              {tocar.map((item, idx) => (
                <Textarea
                  key={idx}
                  value={item}
                  onChange={(e) => updateArray(setTocar, idx, e.target.value)}
                  placeholder={`${idx + 1}. O que pode tocar...`}
                  className="min-h-[60px]"
                />
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-therapeutic-warmth/5 to-transparent border-therapeutic-warmth/20">
            <div className="flex items-center gap-3 mb-4">
              <Ear className="w-6 h-6 text-therapeutic-warmth" />
              <Label className="text-lg font-semibold">3 coisas que consegue OUVIR</Label>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Exemplos: barulho de alguém a conversar, cachorro a ladrar, músicas que gosta, audiolivros, sons da natureza
            </p>
            <div className="space-y-3">
              {ouvir.map((item, idx) => (
                <Textarea
                  key={idx}
                  value={item}
                  onChange={(e) => updateArray(setOuvir, idx, e.target.value)}
                  placeholder={`${idx + 1}. O que consegue ouvir...`}
                  className="min-h-[60px]"
                />
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-therapeutic-trust/5 to-transparent border-therapeutic-trust/20">
            <div className="flex items-center gap-3 mb-4">
              <Wind className="w-6 h-6 text-therapeutic-trust" />
              <Label className="text-lg font-semibold">2 coisas que pode CHEIRAR</Label>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Exemplos: o seu perfume ou de alguém, o cheiro do ambiente, o aroma de uma comida, essência, flores
            </p>
            <div className="space-y-3">
              {cheirar.map((item, idx) => (
                <Textarea
                  key={idx}
                  value={item}
                  onChange={(e) => updateArray(setCheirar, idx, e.target.value)}
                  placeholder={`${idx + 1}. O que pode cheirar...`}
                  className="min-h-[60px]"
                />
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-6 h-6 text-primary" />
              <Label className="text-lg font-semibold">1 coisa que consegue SABOREAR</Label>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Um alimento que esteja perto que pode degustar, uma comida favorita ou bebida calmante
            </p>
            <Textarea
              value={saborear}
              onChange={(e) => setSaborear(e.target.value)}
              placeholder="O que pode saborear..."
              className="min-h-[80px]"
            />
          </Card>

          <Card className="bg-primary/5 p-6 border-primary/20">
            <h3 className="font-semibold text-foreground mb-2">Dica Terapêutica</h3>
            <p className="text-sm text-muted-foreground">
              Esta técnica é particularmente eficaz em momentos de ansiedade aguda, ataques de pânico ou 
              quando se sente desconectado do presente. Ao focar nos cinco sentidos, traz a sua atenção 
              de volta ao momento atual e ao seu ambiente físico, ajudando a interromper o ciclo de 
              pensamentos ansiosos.
            </p>
          </Card>
        </Card>
      </main>
    </div>
  );
};

export default Autotranquilizacao;
