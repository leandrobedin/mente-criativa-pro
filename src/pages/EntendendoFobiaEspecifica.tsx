import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PrintHeader from "@/components/PrintHeader";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FobiaRow {
  situacao: string;
  pensamentos: string;
  sintomas: string;
  comportamento: string;
}

const EntendendoFobiaEspecifica = () => {
  const [rows, setRows] = useState<FobiaRow[]>([
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" }
  ]);

  const exemplos: FobiaRow[] = [
    {
      situacao: "Altura",
      pensamentos: "Vou cair e magoar-me gravemente",
      sintomas: "Vertigem, tremores, sensação de pânico",
      comportamento: "Evitar lugares altos, evitar atividades em locais elevados"
    },
    {
      situacao: "Animais",
      pensamentos: "Esse animal vai atacar-me e causar-me danos",
      sintomas: "Ansiedade intensa, taquicardia, evitação",
      comportamento: "Evitar contacto com animais, evitar ambientes onde possam estar presentes"
    },
    {
      situacao: "Sangue, agulhas e injeções",
      pensamentos: "Vou desmaiar ou sentir uma dor insuportável",
      sintomas: "Náusea, tontura, taquicardia",
      comportamento: "Evitar procedimentos médicos, evitar contacto com sangue e agulhas"
    }
  ];

  const handleRowChange = (index: number, field: keyof FobiaRow, value: string) => {
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
        <PrintHeader title="Entendendo a Fobia Específica" />
        
        <div className="print:hidden">
          <Button variant="outline" onClick={() => window.history.back()} className="mb-4">
            ← Voltar
          </Button>
        </div>

        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-2xl md:text-3xl">Entendendo a Fobia Específica</CardTitle>
                <CardDescription className="text-base mt-2">
                  Identificar medos específicos, pensamentos e comportamentos associados
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-8">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                As fobias específicas caracterizam-se por medos intensos e irracionais de objetos ou situações 
                específicas. Compreender os padrões associados é fundamental para desenvolver estratégias de 
                enfrentamento eficazes.
              </p>
            </div>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">📚 Exemplos Comuns de Fobias Específicas</h3>
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
              <h3 className="text-xl font-semibold text-primary">✍️ Identifique as Suas Fobias Específicas</h3>
              <p className="text-sm text-muted-foreground">
                Utilize a tabela abaixo para registar as suas próprias experiências com fobias específicas. 
                Identifique a situação temida, os pensamentos associados, os sintomas físicos e os comportamentos de evitação.
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
                            placeholder="Ex: Altura, animais, sangue..."
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
                            placeholder="Que sintomas físicos sente?"
                            className="min-h-[80px] text-sm"
                          />
                        </TableCell>
                        <TableCell>
                          <Textarea
                            value={row.comportamento}
                            onChange={(e) => handleRowChange(index, "comportamento", e.target.value)}
                            placeholder="Como reage a esta situação?"
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
                associadas às fobias específicas. Procure ajuda profissional para um diagnóstico preciso e tratamento adequado.
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

export default EntendendoFobiaEspecifica;
