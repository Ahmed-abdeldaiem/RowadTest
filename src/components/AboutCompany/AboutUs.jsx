import React, { useEffect } from 'react';
import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutUs() {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <Box  sx={{ display:'flex', flexDirection:'column', alignItems:'center', overflow:'hidden', py: 6,px:{xs:2,lg:4}, lg:{px: 8}, md: {px:4}, xs:{px:2} }}>
      {/* Company Overview Section */}
      <Box
        data-aos="fade-up"
        sx={{
          textAlign: 'center',
          mb: 6
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            mb: 3,
            textShadow: '1px 1px 1px rgba(41, 14, 249, 0.5)',
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          رواد البنيان للتجارة
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'text.secondary',
            mb: 1,
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.8
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          نحن شركة رائدة في مجال الأثاث المكتبي والمنزلي والفندقي، والتعليمي
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'text.secondary',
            mb: 4,
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.8
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
        نقدم حلولاً متكاملة تجمع بين الجودة والأناقة والراحة
        </Typography>
      </Box>

      {/* Location and Contact Info */}
      <Grid container   spacing={4} sx={{ mb: 6 , width:'100%'  }}>
        {/* الاتصال */}
        <Grid item size={{xs:12,md:6}}>
          <Box
            data-aos="fade-left"
            sx={{
              bgcolor: 'white',
             width:'100%',
              borderRadius: 4,
              p: 4,
              height: '100%',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            <Typography
              variant="h4"
              align="center"
              fontWeight="bold"
              color="primary"
              sx={{ mb: 4 ,textShadow: '1px 1px 1px rgba(41, 14, 249, 0.5)'}}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              معلومات الاتصال
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography
                data-aos="fade-right"
                data-aos-delay="200"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  fontSize: '1.1rem'
                }}
              >
                مقر الشركة في مدينة الرياض
              </Typography>

              <Typography
                data-aos="fade-up"
                data-aos-delay="300"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  fontSize: '1.1rem'
                }}
              >
                3263 شارع هدبة بن مصعب، حي الفيصلية، الرياض 11447
              </Typography>

              <Typography
                data-aos="fade-up"
                data-aos-delay="400"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  fontSize: '1.1rem'
                }}
              >
                المملكة العربية السعودية، ص.ب 28565
              </Typography>
              <Typography
                data-aos="fade-up"
                data-aos-delay="400"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  fontSize: '1.1rem'
                }}
              >
                هاتف: 0112913377
              </Typography>

              <Typography
                data-aos="fade-up"
                data-aos-delay="500"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  fontSize: '1.1rem'
                }}
              >
                فاكس: 0112922345
              </Typography>

            
            </Box>
          </Box>
        </Grid>

        {/* Map Section */}
        <Grid item size={{xs:12,md:6}}>
          <Box
            data-aos="fade-right"
            sx={{
              bgcolor: 'white',
              borderRadius: 4,
              overflow: 'hidden',
              height: '100%',
              minHeight: '400px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1154.6959278256709!2d46.77449430907444!3d24.635858558583774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f07fdc408cd77%3A0x379fe43c475fa2ae!2z2YXYpNiz2LPYqSDYsdmI2KfYryDYp9mE2KjZhtmK2KfZhiDZhNmE2KrYrNin2LHYqQ!5e1!3m2!1sar!2sus!4v1747906251281!5m2!1sar!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع الشركة على الخريطة"
            />
          </Box>
        </Grid>
      </Grid>

    
    </Box>
  );
}






