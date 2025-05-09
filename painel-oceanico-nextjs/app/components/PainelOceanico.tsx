"use client";
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const exportTasks = [
  "Reservar navio com transit time adequado",
  "Emitir SLI, Fatura e Packing List",
  "Confirmar VGM e CY Cutoff",
  "Coordenar stuffing e fotos da carga",
  "Validar export compliance e licenças",
  "Enviar pré-alerta ao agente de destino"
];

const importTasks = [
  "Revisar B/L, Invoice, Packing List",
  "Submeter ISF / entrada aduaneira",
  "Rastrear contentor até o último porto",
  "Gerenciar free time e D&D",
  "Agendar transporte para entrega final",
  "Coordenar com armazém e finalizar entrega"
];

export default function PainelOceanico() {
  const [exportStatus, setExportStatus] = useState(Array(exportTasks.length).fill(false));
  const [importStatus, setImportStatus] = useState(Array(importTasks.length).fill(false));

  const toggleExport = (index) => {
    const newStatus = [...exportStatus];
    newStatus[index] = !newStatus[index];
    setExportStatus(newStatus);
  };

  const toggleImport = (index) => {
    const newStatus = [...importStatus];
    newStatus[index] = !newStatus[index];
    setImportStatus(newStatus);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Painel Interativo - Ocean Export / Import</h1>
      <Tabs defaultValue="export">
        <TabsList>
          <TabsTrigger value="export">Ocean Export</TabsTrigger>
          <TabsTrigger value="import">Ocean Import</TabsTrigger>
        </TabsList>

        <TabsContent value="export">
          <Card>
            <CardContent className="space-y-4 p-4">
              {exportTasks.map((task, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Checkbox checked={exportStatus[i]} onCheckedChange={() => toggleExport(i)} />
                  <span className={exportStatus[i] ? 'line-through text-gray-500' : ''}>{task}</span>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <Label>Data de Cutoff</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Transportadora</Label>
                  <Input placeholder="Nome da transportadora" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="import">
          <Card>
            <CardContent className="space-y-4 p-4">
              {importTasks.map((task, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Checkbox checked={importStatus[i]} onCheckedChange={() => toggleImport(i)} />
                  <span className={importStatus[i] ? 'line-through text-gray-500' : ''}>{task}</span>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <Label>Data de ETA</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Porto de destino</Label>
                  <Input placeholder="Nome do porto" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
