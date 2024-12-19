import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const competitiveData = [
  {
    feature: 'ECG Parameters',
    kolibri: '10',
    kardis: '6',
    oura: '1',
    weCardio: '3',
    biobeat: '1',
    appleWatch: '1',
    beamO: '-'
  },
  {
    feature: 'HRV parameters',
    kolibri: 'YES',
    kardis: '-',
    oura: '1',
    weCardio: '1',
    biobeat: '1',
    appleWatch: '-',
    beamO: '-'
  },
  {
    feature: 'Clinical grade HRV',
    kolibri: 'YES',
    kardis: 'NO',
    oura: 'NO',
    weCardio: 'NO',
    biobeat: 'NO',
    appleWatch: 'NO',
    beamO: '-'
  },
  {
    feature: 'Pathologies',
    kolibri: '20',
    kardis: '7',
    oura: '1',
    weCardio: '2',
    biobeat: '3',
    appleWatch: '1',
    beamO: '-'
  },
  {
    feature: 'Signal quality analysis',
    kolibri: 'YES',
    kardis: 'NO',
    oura: 'NO',
    weCardio: 'NO',
    biobeat: 'NO',
    appleWatch: 'NO',
    beamO: '-'
  },
  {
    feature: 'Early stage risk identification',
    kolibri: 'YES',
    kardis: 'NO',
    oura: 'YES',
    weCardio: 'NO',
    biobeat: 'NO',
    appleWatch: 'NO',
    beamO: '-'
  },
  {
    feature: 'CBC Blood & Metabolism',
    kolibri: '16',
    kardis: 'NO',
    oura: 'NO',
    weCardio: 'NO',
    biobeat: 'NO',
    appleWatch: 'NO',
    beamO: '-'
  },
  {
    feature: 'Mental health (stress) analysis',
    kolibri: 'YES',
    kardis: 'NO',
    oura: 'YES',
    weCardio: 'NO',
    biobeat: 'NO',
    appleWatch: 'NO',
    beamO: '-'
  },
  {
    feature: 'Test time',
    kolibri: '1-5 Min',
    kardis: '30 Sec',
    oura: 'Continuous',
    weCardio: 'n/a',
    biobeat: 'n/a',
    appleWatch: 'n/a',
    beamO: '-'
  },
  {
    feature: 'App based',
    kolibri: 'YES',
    kardis: 'YES',
    oura: 'YES',
    weCardio: 'YES',
    biobeat: 'YES',
    appleWatch: 'YES',
    beamO: '-'
  },
  {
    feature: 'Remote monitoring',
    kolibri: 'YES',
    kardis: 'YES',
    oura: 'YES',
    weCardio: 'YES',
    biobeat: 'YES',
    appleWatch: 'NO',
    beamO: '-'
  }
];

const CompetitiveTable = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Competitive Landscape</h2>
        <p className="text-medical-600 italic">"Why is KOLIBRI unique and differentiated?"</p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-medical-50">
              <TableHead className="font-bold">Analysis Types</TableHead>
              <TableHead className="font-bold">
                KOLIBRI
                <div className="text-xs text-medical-600">NINVA HEALTH</div>
              </TableHead>
              <TableHead>Kardis Mobile</TableHead>
              <TableHead>Oura ring</TableHead>
              <TableHead>WeCardio</TableHead>
              <TableHead>Biobeat</TableHead>
              <TableHead>Apple Watch</TableHead>
              <TableHead>BeamO</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {competitiveData.map((row, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <TableCell className="font-medium">{row.feature}</TableCell>
                <TableCell className={`${row.kolibri === 'YES' ? 'text-medical-600 font-semibold' : ''}`}>
                  {row.kolibri}
                </TableCell>
                <TableCell className={`${row.kardis === 'NO' ? 'text-red-500' : ''}`}>{row.kardis}</TableCell>
                <TableCell className={`${row.oura === 'NO' ? 'text-red-500' : ''}`}>{row.oura}</TableCell>
                <TableCell className={`${row.weCardio === 'NO' ? 'text-red-500' : ''}`}>{row.weCardio}</TableCell>
                <TableCell className={`${row.biobeat === 'NO' ? 'text-red-500' : ''}`}>{row.biobeat}</TableCell>
                <TableCell className={`${row.appleWatch === 'NO' ? 'text-red-500' : ''}`}>{row.appleWatch}</TableCell>
                <TableCell>{row.beamO}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CompetitiveTable;