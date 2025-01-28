import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// FAQ Data
const faqData = [
  {
    id: 'panel1',
    question: "What is Al inference?",
    answer: "It's particularly useful for Al apps that need immediate processing and minimal delay, like generative Al and real-time object detection. It's particularly useful for Al apps that need immediate processing and minimal delay, like generative Al and real-time object detection. "
  },
  {
    id: 'panel2',
    question: "What is the difference between Al inference at the edge and in the cloud? ",
    answer: "AI inference at the edge happens locally on devices, offering lower latency, reduced bandwidth use, and better privacy, but with limited computational power. In contrast, cloud-based AI inference relies on remote servers, offering more processing power and scalability but can suffer from higher latency and bandwidth requirements."
  },
  {
    id: 'panel3',
    question: "What are the key benefits of Gcore Inference at the Edge for end users? ",
    answer: "Gcore Inference at the Edge offers low latency, reduced bandwidth use, better privacy, offline functionality, and scalability, ensuring faster, more reliable, and secure AI processing for end users."
  },
  {
    id: 'panel4',
    question: "Is Gcore Inference at the Edge suitable for AloT systems? ",
    answer: "Yes, Gcore Inference at the Edge is highly suitable for AIoT (Artificial Intelligence of Things) systems. It enables real-time data processing on IoT devices, reducing latency, saving bandwidth, and enhancing security, making it ideal for applications like smart cities, industrial automation, and connected devices that require fast, efficient, and local decision-making."
  },
  {
    id: 'panel5',
    question: "Why is the NVIDIA L40S GPU good for Al inference?",
    answer: "The NVIDIA L40S GPU is ideal for AI inference due to its high performance, Tensor Cores for faster AI processing, energy efficiency, and scalability, making it perfect for handling complex models and large-scale inference tasks."
  }
];

// Styled Components
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: 'transparent',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    color: 'white',
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(90deg)',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  color: 'rgb(209, 213, 219)', // Equivalent to text-gray-300
}));

export default function FAQ() {
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : '');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col text-center w-full mb-16">
          <h2 className="text-5xl font-medium mb-8">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-400 mx-auto max-w-2xl">
            Find answers to common questions about our services, process, and support.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map(({ id, question, answer }) => (
            <Accordion 
              key={id}
              expanded={expanded === id} 
              onChange={handleChange(id)}
            >
              <AccordionSummary aria-controls={`${id}-content`} id={`${id}-header`}>
                <Typography component="h3" className="font-medium text-lg">
                  {question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}