import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Check, Clock } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

const Roadmap = () => {
  const milestones = [
    {
      description: "Medical research",
      status: "completed",
      notes: "Declared accuracies are based on R&D to date. New R&D initiatives are ongoing.",
    },
    {
      description: "Machine Learning training (AI)",
      status: "completed",
      notes: "Developed. Continuous improvement.",
    },
    {
      description: "Patent & scientific recognition",
      status: "completed",
      notes: "12 scientific publications.",
    },
    {
      description: "CE/FDA documentation preparation",
      status: "completed",
      notes: "FDA/CE documentation being updated. Small clinical trial required to demonstrate signal quality for certification.",
    },
    {
      description: "Market entry Strategy",
      status: "completed",
      notes: "Developed.",
    },
    {
      description: "Branding & Marketing",
      status: "in-progress",
      notes: "Partner selected.",
    },
    {
      description: "Mass production set-up",
      status: "in-progress",
      notes: "Partner selected.",
    },
    {
      description: "Develop new App",
      status: "in-progress",
      notes: "Based on market testing, new UI is being developed.",
    },
    {
      description: "Official product launch (certified)",
      status: "in-progress",
      notes: "Q3 2025 – Q1 2026 (Depending on certification queue)",
    },
  ];

  const futureGoals = [
    "Certify a model that works with BLUETOOTH BLE.",
    "Develop new software that will work under OS WINDOWS, macOS, iOS, ANDROID",
    "Consider the possibility of integrating the medical device with TABLET under ANDROID OS",
    "Switch to the option of using the software with a monthly subscription fee.",
    "Conduct technical tests in an accredited laboratory in the EU.",
    "Conduct new clinical trials in the EU.",
    "Obtain CE marking of the medical device in accordance with the new EU regulation 2017/745",
    "Set a deadline for the implementation of the above items by December 2026.",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Roadmap for Modernization of Medical Equipment</h1>
          <p className="text-xl text-medical-600 max-w-3xl mx-auto">
            "Most milestones already reached, giving confidence in the success"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Current Milestones</h2>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {milestones.map((milestone, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{milestone.description}</TableCell>
                      <TableCell>
                        {milestone.status === "completed" ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <Clock className="h-5 w-5 text-blue-500" />
                        )}
                      </TableCell>
                      <TableCell className="text-gray-600">{milestone.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Future Development Goals</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {futureGoals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-medical-600 mt-1 flex-shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8 text-sm text-gray-600"
        >
          *Detailed timeline available on request.
        </motion.div>
      </div>
    </div>
  );
};

export default Roadmap;