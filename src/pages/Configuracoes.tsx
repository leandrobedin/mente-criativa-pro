import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Settings, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import LogoUpload from "@/components/LogoUpload";

const Configuracoes = () => {
  const { toast } = useToast();
  const [nome, setNome] = useState("");
  const [crp, setCrp] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setNome(localStorage.getItem("professional-name") || "");
    setCrp(localStorage.getItem("professional-crp") || "");
    setTelefone(localStorage.getItem("professional-phone") || "");
    setEmail(localStorage.getItem("professional-email") || "");
  }, []);

  const handleSave = () => {
    localStorage.setItem("professional-name", nome);
    localStorage.setItem("professional-crp", crp);
    localStorage.setItem("professional-phone", telefone);
    localStorage.setItem("professional-email", email);
    
    toast({
      title: "Dados guardados",
      description: "As suas informações foram guardadas com sucesso",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">Configurações</h1>
              <p className="text-sm text-muted-foreground">Personalize as suas informações profissionais</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Logo Upload */}
          <LogoUpload />

          {/* Professional Info */}
          <Card className="p-6">
            <div className="flex gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Informações Profissionais</h2>
                <p className="text-sm text-muted-foreground">
                  Estes dados aparecerão nos documentos impressos
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Dr./Dra. [Seu Nome]"
                />
              </div>

              <div>
                <Label htmlFor="crp">Número de Registo Profissional</Label>
                <Input
                  id="crp"
                  value={crp}
                  onChange={(e) => setCrp(e.target.value)}
                  placeholder="CRP 00/00000 ou similar"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    type="tel"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="+351 900 000 000"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSave} className="gap-2">
              <Save className="h-4 w-4" />
              Guardar Configurações
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Configuracoes;
