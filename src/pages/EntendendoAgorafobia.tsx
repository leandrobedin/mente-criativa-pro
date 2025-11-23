import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PrintHeader from "@/components/PrintHeader";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface AgorafobiaRow {
  situacao: string;
  pensamentos: string;
  sintomas: string;
  comportamento: string;
}

const EntendendoAgorafobia = () => {
  const [rows, setRows] = useState<AgorafobiaRow[]>([
    { situacao: "Espaços públicos", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "Multidões", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "Transporte público", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "Lugares abertos", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "Lugares fechados", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "Viajar ou sair de casa", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "Estar sozinho(a)", pensamentos: "", sintomas: "", comportamento: "" }
  ]);

  const exemplos: AgorafobiaRow[] = [
    {
      situacao: "Espaços públicos",
      pensamentos: "Não consigo escapar e vou ter um ataque de pânico",
      sintomas: "Ansiedade intensa, medo intenso de ficar preso(a)",
      comportamento: "Evitar espaços públicos, evitar sair de casa"
    },
    {
      situacao: "Multidões",
      pensamentos: "Vou ser engolido(a) pela multidão e não conseguirei escapar",
      sintomas: "Sensação de sufocamento, palpitações, tremores",
      comportamento: "Evitar áreas com muitas pessoas, evitar eventos com aglomerações"
    },
    {
      situacao: "Transporte público",
      pensamentos: "Vou ficar preso(a) e não conseguirei sair",
      sintomas: "Medo de ter um ataque de pânico, aumento da frequência cardíaca",
      comportamento: "Evitar usar transporte público, evitar situações de tráfego"
    }
  ];

  const handleRowChange = (index: number, field: keyof AgorafobiaRow, value: string) => {
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
        <PrintHeader title="Entendendo a Agorafobia" />
        
        <div className="print:hidden">
          <Button variant="outline" onClick={() => window.history.back()} className="mb-4">
            ← Voltar
          </Button>
        </div>

        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
            <div className="flex items-center gap-3">
              <MapPin className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-2xl md:text-3xl">Entendendo a Agorafobia</CardTitle>
                <CardDescription className="text-base mt-2">
                  Compreender os padrões de pensamento, sintomas e comportamentos na prática
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-8">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                A agorafobia caracteriza-se pelo medo intenso de situações onde escapar pode ser difícil ou 
                onde a ajuda pode não estar disponível em caso de ataque de pânico. Identificar os padrões 
                de pensamento, sintomas físicos e comportamentos é essencial para o tratamento.
              </p>
            </div>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">📚 Exemplos de Referência</h3>
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
              <h3 className="text-xl font-semibold text-primary">✍️ Registe a Sua Experiência</h3>
              <p className="text-sm text-muted-foreground">
                Preencha a tabela abaixo com as suas próprias experiências relacionadas com a agorafobia.
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
                        <TableCell className="font-medium">{row.situacao}</TableCell>
                        <TableCell>
                          <Textarea
                            value={row.pensamentos}
                            onChange={(e) => handleRowChange(index, "pensamentos", e.target.value)}
                            placeholder="Descreva os pensamentos..."
                            className="min-h-[80px] text-sm"
                          />
                        </TableCell>
                        <TableCell>
                          <Textarea
                            value={row.sintomas}
                            onChange={(e) => handleRowChange(index, "sintomas", e.target.value)}
                            placeholder="Descreva os sintomas..."
                            className="min-h-[80px] text-sm"
                          />
                        </TableCell>
                        <TableCell>
                          <Textarea
                            value={row.comportamento}
                            onChange={(e) => handleRowChange(index, "comportamento", e.target.value)}
                            placeholder="Descreva os comportamentos..."
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
                associadas à agorafobia. Procure ajuda profissional para um diagnóstico preciso.
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

export default EntendendoAgorafobia;
