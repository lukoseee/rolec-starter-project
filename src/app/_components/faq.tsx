'use client'
import { styled } from '@mui/material/styles';
import MuiAccordion, { type AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  type AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from 'react';



const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />))(({ theme }) => ({ typography: {fontFamily:'-apple-system'}, fontSize: '50', border: 'none', 
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&::before': {display: 'none',},
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon/>} {...props}/>))
  (({ theme }) => ({ typography: {fontFamily:'-apple-system'}, fontSize: '40',
   backgrondColor: 'rgba(0, 0, 0, .03)',
   flexDirection: 'row', [`& .${accordionSummaryClasses.content}` ]:{ typography: {fontFamily:'-apple-system'}, fontSize: '40', marginLeft: theme.spacing(1),}, [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: { transform: 'rotate(180deg)',},
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({ typography: {fontFamily:'-apple-system'}, fontSize: '40',
  padding:theme.spacing(2),
  borderTop: '1px solid rgba(255, 255, 255, 0.13)',
}));

export default function FAQ()
{   

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    const [isHydrated, setIsHydrated] = useState(false);
    
    useEffect(() => {setIsHydrated(true);}, []);
    
    if (!isHydrated) return null;

    return (
        <><Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography component="span" fontFamily={'inherit'} fontWeight={'bold'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography fontFamily={'inherit'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion><Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography component="span" fontFamily={'inherit'} fontWeight={'bold'}>Donec congue enim vitae ex pharetra rhoncus? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontFamily={'inherit'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion><Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography component="span" fontFamily={'inherit'} fontWeight={'bold'}>Ut sollicitudin velit metus, at feugiat ex convallis non?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontFamily={'inherit'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion><Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography component="span" fontFamily={'inherit'} fontWeight={'bold'}>Praesent sed sollicitudin eros. Nam ornare consequat lacus, non sollicitudin leo? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontFamily={'inherit'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion><Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography component="span" fontFamily={'inherit'} fontWeight={'bold'}>Curabitur neque turpis, ornare nec ligula sed, maximus euismod libero?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontFamily={'inherit'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion><Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    <Typography component="span" fontFamily={'inherit'} fontWeight={'bold'}>Cras vitae consectetur tellus, at dignissim augue? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontFamily={'inherit'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion></>
    );
}