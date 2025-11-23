import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload, X, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LogoUpload = () => {
  const [logo, setLogo] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const savedLogo = localStorage.getItem("professional-logo");
    if (savedLogo) {
      setLogo(savedLogo);
    }
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast({
          title: "Ficheiro muito grande",
          description: "O logo deve ter no máximo 2MB",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setLogo(base64String);
        localStorage.setItem("professional-logo", base64String);
        toast({
          title: "Logo guardado",
          description: "O seu logo foi guardado com sucesso",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    localStorage.removeItem("professional-logo");
    toast({
      title: "Logo removido",
      description: "O logo foi removido",
    });
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <Label className="text-base font-semibold text-foreground">Logo Profissional</Label>
          <p className="text-sm text-muted-foreground mt-1">
            Adicione o logo da sua clínica ou consultório (máx. 2MB)
          </p>
        </div>

        {logo ? (
          <div className="space-y-4">
            <div className="relative inline-block">
              <img 
                src={logo} 
                alt="Logo profissional" 
                className="max-h-24 w-auto rounded-lg border border-border"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                onClick={handleRemoveLogo}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Label htmlFor="logo-upload" className="cursor-pointer">
                <Button variant="outline" size="sm" asChild>
                  <span>
                    <Upload className="h-4 w-4 mr-2" />
                    Alterar Logo
                  </span>
                </Button>
              </Label>
              <input
                id="logo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
        ) : (
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                <Building2 className="h-6 w-6 text-muted-foreground" />
              </div>
              <Label htmlFor="logo-upload" className="cursor-pointer">
                <Button variant="outline" size="sm" asChild>
                  <span>
                    <Upload className="h-4 w-4 mr-2" />
                    Carregar Logo
                  </span>
                </Button>
              </Label>
              <input
                id="logo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <p className="text-xs text-muted-foreground">PNG, JPG ou WebP (máx. 2MB)</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default LogoUpload;
