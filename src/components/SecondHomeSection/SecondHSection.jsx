
import React, { useEffect } from 'react';
import { Box, Typography, Grid, useTheme, Button  } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const cardData = [
  { id: 1, title: 'غرف نوم', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/SecondHomeSection-homeFur/SS1-1.jpg' },
  { id: 2, title: 'غرف نوم أطفال', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/SecondHomeSection-homeFur/SS2.avif' },
  { id: 3, title: 'خزانة ملابس', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/SecondHomeSection-homeFur/SS3-1.jpg' },
  { id: 4, title: 'غرف معيشة', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/SecondHomeSection-homeFur/SS4.jpg' },
  { id: 5, title: 'كنب', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/SecondHomeSection-homeFur/SS5-1.jpg' },
  { id: 6, title: 'كنب زاوية', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/SecondHomeSection-homeFur/SS6.avif' },
  { id: 7, title: 'طاولة طعام', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/SecondHomeSection-homeFur/SS7-1.jpg' },
  { id: 8, title: 'طاولة تلفاز', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/SecondHomeSection-homeFur/SS8-1.jpg' },
  { id: 9, title: 'كرسي', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/SecondHomeSection-homeFur/SS9-1.jpg' },
  { id: 10, title: 'رف ديكور', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/SecondHomeSection-homeFur/SS10.webp' },
];


export default function SecondHSection() {
  const theme = useTheme();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);




  return <>
  
  <Box  sx={{ display:'flex', flexDirection:'column', alignItems:'center' ,overflow:'hidden', py: 6,px:{xs:2,lg:4}, lg:{px: 8}, md: {px:4}, xs:{px:2} }}>
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
          الأثاث المنزلي 
        </Typography>
      
      </Box>

      {/* الاثاث المنزلي */}
      <Grid container   spacing={4} sx={{ mb: 6 , width:'100%'  }}>

 {/* Home Furniture Swiper */}
 <Grid item size={{xs:12,md:6}}>
          <Box
             data-aos="fade-left"
             sx={{
               bgcolor: 'white',
               borderRadius: 4,
               overflow: 'hidden',
               height: '100%',
               minHeight: '400px',
              //  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
             }}
          >
            <Swiper
              speed={600}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              initialSlide={0}
              coverflowEffect={{
                rotate: 25,
                stretch: 80,
                depth: 180,
                modifier: 1,
                slideShadows: true,
                

              }}
              breakpoints={{
                768: {
                  slidesPerView: 3, 
                },
              }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
              loop={true}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                duration: 600,
              }}
              style={{
                width: '100%',
                maxWidth: '1000px',
                padding: '40px 0',
              }}
            >
              {cardData.map((card) => (
                <SwiperSlide 
                  key={card.id}
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '400px !important',
                    height: '400px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      boxShadow: '0 15px 50px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={card.image}
                      alt={card.title}
                      sx={{
                        width: '130%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                        padding: '30px 20px',
                        borderBottomLeftRadius: '15px',
                        borderBottomRightRadius: '15px',
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          textAlign: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        }}
                      >
                        {card.title}
                      </Typography>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination" />
            </Swiper>
          </Box>
        </Grid>

       {/* Home Furniture paragraph */}
       <Grid item size={{xs:12,md:6}}>
          <Box
            data-aos="fade-right"
            sx={{
              bgcolor: 'white',
              borderRadius: 4,
              overflow: 'hidden',
              height: '100%',
              minHeight: '400px',
              // boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3  ,height:'100%',alignItems:'center',justifyContent:'center'}}>
              <Typography
                data-aos="fade-right"
                data-aos-delay="200"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  fontSize: '1.4rem',
                  textShadow: '1px 1px 1px rgba(0,0,0,0.5)',
                  textAlign: 'justify'
                }}
              >
                تُقدم مؤسسة رواد البنيان للتجارة مجموعة متميزة من الأثاث المنزلي العصري الذي يجمع بين الجودة العالية والتصميم الأنيق والأسعار التنافسية، لتلبية مختلف الأذواق واحتياجات المنازل السعودية.

              </Typography>

              <Typography
                data-aos="fade-up"
                data-aos-delay="300"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  fontSize: '1.4rem',
                  textShadow: '1px 1px 1px rgba(0,0,0,0.5)',
                  textAlign: 'justify'
                }}
              >
 تشمل تشكيلتها أثاث غرف المعيشة، وغرف النوم، والطاولات، والكراسي، وخزائن التخزين، وغيرها من القطع المصممة بعناية لتوفير الراحة والجمال في كل ركن من أركان المنزل.
              </Typography>

              <Typography
                data-aos="fade-up"
                data-aos-delay="400"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  fontSize: '1.4rem',
                  textShadow: '1px 1px 1px rgba(0,0,0,0.5)',
                  textAlign: 'justify'
                }}
              >
وتركّز المؤسسة على اختيار المواد بعناية والتشطيب المتقن لضمان التحمّل والمتانة، ما يجعل منتجاتها خيارًا مثاليًا للراغبين في إضفاء لمسة من الفخامة والعملية على منازلهم.
              </Typography>
          
              <Button component={Link}  sx={{bgcolor:'#0334bb',color:'white' ,fontSize:{xs:'1rem',md:'1.2rem'}, transition:'all 0.4s ease', '&:hover':{bgcolor:'#0334ee',transition:'all 0.4s ease'}}}>عرض المزيد</Button>
          

            
            </Box>
          
          </Box>
        </Grid>

      
          
      </Grid>

    
    </Box>
  </>
}

const styles = `
.swiper-pagination {
  position: relative !important;
  margin-top: 20px !important;
}

.swiper-pagination-bullet {
  width: 12px !important;
  height: 12px !important;
  background: rgba(255, 255, 255, 0.5) !important;
  opacity: 1 !important;
  transition: all 0.3s ease !important;
}

.swiper-pagination-bullet-active {
  background: #0334bb !important;
  transform: scale(1.2) !important;
}

.swiper-slide {
  transition: transform 0.4s ease !important;
}

.swiper-slide-active {
  transform: scale(1.2) !important;
}
`;