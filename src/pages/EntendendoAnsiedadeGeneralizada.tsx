import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PrintHeader from "@/components/PrintHeader";
import { Brain } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface TAGRow {
  situacao: string;
  pensamentos: string;
  sintomas: string;
  comportamento: string;
}

const EntendendoAnsiedadeGeneralizada = () => {
  const [rows, setRows] = useState<TAGRow[]>([
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" }
  ]);

  const exemplos: TAGRow[] = [
    {
      situacao: "Receber críticas",
      pensamentos: "Se eu cometer um erro, todos vão julgar-me",
      sintomas: "Preocupação excessiva",
      comportamento: "Evitar situações de crítica"
    },
    {
      situacao: "Problemas de saúde",
      pensamentos: "Qualquer sintoma pode ser grave e fatal",
      sintomas: "Hipervigilância, sintomas físicos",
      comportamento: "Procurar constantemente informações médicas"
    },
    {
      situacao: "Incerteza sobre o futuro",
      pensamentos: "Tudo vai correr mal; não há esperança",
      sintomas: "Irritabilidade, fadiga e tensão muscular",
      comportamento: "Hiperfoco em planeamento, evitar riscos"
    }
  ];

  const handleRowChange = (index: number, field: keyof TAGRow, value: string) => {
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
        <PrintHeader title="Entendendo o Transtorno de Ansiedade Generalizada" />
        
        <div className="print:hidden">
          <Button variant="outline" onClick={() => window.history.back()} className="mb-4">
            ← Voltar
          </Button>
        </div>

        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-2xl md:text-3xl">Transtorno de Ansiedade Generalizada</CardTitle>
                <CardDescription className="text-base mt-2">
                  Compreender os padrões de preocupação excessiva na prática
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-8">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                O Transtorno de Ansiedade Generalizada (TAG) caracteriza-se por preocupação excessiva e persistente 
                sobre diversos aspetos da vida quotidiana. Reconhecer os padrões de pensamento e sintomas é 
                fundamental para o tratamento eficaz.
              </p>
            </div>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">📚 Exemplos Comuns no TAG</h3>
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
              <h3 className="text-xl font-semibold text-primary">✍️ Registe as Suas Preocupações</h3>
              <p className="text-sm text-muted-foreground">
                Identifique as situações que desencadeiam preocupação excessiva, os pensamentos associados, 
                os sintomas que experiencia e os comportamentos resultantes.
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
                            placeholder="Ex: Trabalho, saúde, família..."
                            className="min-h-[80px] text-sm"
                          />
                        </TableCell>
                        <TableCell>
                          <Textarea
                            value={row.pensamentos}
                            onChange={(e) => handleRowChange(index, "pensamentos", e.target.value)}
                            placeholder="Que preocupações surgem?"
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
                            placeholder="Como lida com isto?"
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
                associadas ao transtorno de ansiedade generalizada. Procure ajuda profissional para um diagnóstico preciso.
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

export default EntendendoAnsiedadeGeneralizada;
