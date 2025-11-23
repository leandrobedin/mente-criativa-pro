import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PrintHeader from "@/components/PrintHeader";
import { Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import illustration from "@/assets/ansiedade-social-illustration.png";

interface AnsiedadeSocialRow {
  situacao: string;
  pensamentos: string;
  sintomas: string;
  comportamento: string;
}

const EntendendoAnsiedadeSocial = () => {
  const [rows, setRows] = useState<AnsiedadeSocialRow[]>([
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" }
  ]);

  const exemplos: AnsiedadeSocialRow[] = [
    {
      situacao: "Falar em público",
      pensamentos: "Vou fazer figura de parvo(a) e todos vão julgar-me",
      sintomas: "Tremores, sudorese, voz trémula",
      comportamento: "Evitar apresentações públicas, evitar situações de fala em grupo"
    },
    {
      situacao: "Conhecer novas pessoas",
      pensamentos: "Ninguém vai gostar de mim, serei rejeitado(a)",
      sintomas: "Ansiedade intensa, medo de ser julgado(a)",
      comportamento: "Evitar participar de eventos sociais e encontros amorosos"
    },
    {
      situacao: "Ser o centro das atenções",
      pensamentos: "Todos estão a observar-me e a pensar coisas negativas sobre mim",
      sintomas: "Taquicardia, rubor facial, sensação de desconforto e inadequação",
      comportamento: "Evitar situações em que seja o centro das atenções"
    }
  ];

  const handleRowChange = (index: number, field: keyof AnsiedadeSocialRow, value: string) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [field]: value };
    setRows(newRows);
  };

  const handleSave = () => {
    toast.success("Dados guardados com sucesso!");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <PrintHeader title="Entendendo o Transtorno de Ansiedade Social" />
        
        <div className="print:hidden">
          <Button variant="outline" onClick={() => window.history.back()} className="mb-4">
            ← Voltar
          </Button>
        </div>

        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-2xl md:text-3xl">Transtorno de Ansiedade Social</CardTitle>
                <CardDescription className="text-base mt-2">
                  Compreender o medo de situações sociais e o receio de julgamento
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-8">
            <div className="flex justify-center my-6">
              <img 
                src={illustration} 
                alt="Ilustração ansiedade social" 
                className="max-w-md w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                O Transtorno de Ansiedade Social caracteriza-se pelo medo intenso de situações sociais onde a 
                pessoa pode ser observada ou julgada por outros. Este medo pode afetar significativamente a 
                qualidade de vida e as relações interpessoais.
              </p>
            </div>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">📚 Situações Sociais Comuns</h3>
              <div className="overflow-x-auto">
                <Table className="border">
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-bold">Situações</TableHead>
                      <TableHead className="font-bold">Pensamentos Disfuncionais</TableHead>
                      <TableHead className="font-bold">Sintomas de Ansiedade</TableHead>
                      <TableHead className="font-bold">Comportamento</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {exemplos.map((exemplo, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{exemplo.situacao}</TableCell>
                        <TableCell className="text-sm">{exemplo.pensamentos}</TableCell>
                        <TableCell className="text-sm">{exemplo.sintomas}</TableCell>
                        <TableCell className="text-sm">{exemplo.comportamento}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">✍️ As Suas Experiências Sociais</h3>
              <p className="text-sm text-muted-foreground">
                Identifique as situações sociais que lhe causam ansiedade, os pensamentos que surgem, 
                os sintomas físicos e emocionais, e os comportamentos de evitação.
              </p>
              <div className="overflow-x-auto">
                <Table className="border">
                  <TableHeader>
                    <TableRow className="bg-primary/10">
                      <TableHead className="font-bold">Situações</TableHead>
                      <TableHead className="font-bold">Pensamentos Disfuncionais</TableHead>
                      <TableHead className="font-bold">Sintomas de Ansiedade</TableHead>
                      <TableHead className="font-bold">Comportamento</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Textarea
                            value={row.situacao}
                            onChange={(e) => handleRowChange(index, "situacao", e.target.value)}
                            placeholder="Ex: Festas, reuniões, falar ao telefone..."
                            className="min-h-[80px] text-sm"
                          />
                        </TableCell>
                        <TableCell>
                          <Textarea
                            value={row.pensamentos}
                            onChange={(e) => handleRowChange(index, "pensamentos", e.target.value)}
                            placeholder="Que pensamentos surgem?"
                            className="min-h-[80px] text-sm"
                          />
                        </TableCell>
                        <TableCell>
                          <Textarea
                            value={row.sintomas}
                            onChange={(e) => handleRowChange(index, "sintomas", e.target.value)}
                            placeholder="Que sintomas sente?"
                            className="min-h-[80px] text-sm"
                          />
                        </TableCell>
                        <TableCell>
                          <Textarea
                            value={row.comportamento}
                            onChange={(e) => handleRowChange(index, "comportamento", e.target.value)}
                            placeholder="Como evita esta situação?"
                            className="min-h-[80px] text-sm"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-sm text-amber-900 dark:text-amber-200">
                ⚠️ <strong>Nota Importante:</strong> Cada pessoa vivencia diferentes características diagnósticas 
                associadas ao transtorno de ansiedade social. Procure ajuda profissional para um diagnóstico preciso.
              </p>
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

export default EntendendoAnsiedadeSocial;
