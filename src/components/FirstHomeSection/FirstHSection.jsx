
import style from './Office.module.css'

import React, { useEffect } from 'react';
import { Box, Typography, Grid, useTheme, Button  } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const cardData = [
  { id: 1, title: 'مكتب فاخر', image: 'https://fekrahome.com/wp-content/uploads/2023/01/7.jpg' },
  { id: 2, title: 'طاولة اجتماعات ', image: 'https://cdn.salla.sa/NOmmV/3o0Z352PL2N03loRAmf7H8AG9WnxdDG0u2NN7mXt.jpg' },
  { id: 3, title: 'كرسي مكتب ', image: 'https://cdn.salla.sa/EdWdg/44de6d52-99a2-4cc7-9d53-3a1250f6ae90-1000x1000-w0B6LMT7LfdVmGCy1pW3fTTEYPMqGpaUfbTopgj0.png' },
  { id: 4, title: 'خزائن ملفات ', image: 'https://m.media-amazon.com/images/I/61MVZLiwKeL._AC_UF1000,1000_QL80_.jpg' },
  { id: 5, title: 'مكتب استقبال ', image: 'https://magicarteg.com/wp-content/uploads/2023/05/k-105-430x544.jpg' },
  { id: 6, title: 'رف مكتبي', image: 'https://manziluna.net/cdn/shop/files/image.remini-enhanced-2024-08-13T120905.841.jpg?v=1737742830&width=533' },
  { id: 7, title: 'مكتب زاوية ', image: 'https://cdn.salla.sa/aOyYZ/fbd7adff-1199-4b5d-a3cb-9cbf4d06a561-1000x750-Jx7QWzgPPyl4lyH2mzNMdfG0DZe0sXld1S1i9lcF.jpg' },
  { id: 8, title: 'طاولة مؤتمرات ', image: 'https://offispace.sa/wp-content/uploads/2022/07/IME04-scaled.jpg' },
  { id: 9, title: 'كنب مكتبي', image: 'https://masterroom.com/wp-content/uploads/2024/04/%D8%B7%D9%82%D9%85-%D9%83%D9%86%D8%A8.webp' },
  { id: 10, title: 'وحدة عمل جماعية', image: 'https://alomary.sa/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-18-at-1.55.28-PM.jpeg' },
];


export default function FirstHSection() {
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
      {/*  office Overview Section */}
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
          الأثاث المكتبي 
        </Typography>
      
      </Box>

      {/* الاثاث المكتبي */}
      <Grid container   spacing={4} sx={{ mb: 6 , width:'100%'  }}>
       {/* office Furniture paragraph */}
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
                تُقدّم مؤسسة رواد البنيان للتجارة حلولاً متكاملة في مجال الأثاث المكتبي، تجمع بين الجودة العالية، والتصميم العملي، والمتانة التي تلبي احتياجات بيئات العمل الحديثة. 
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
                نحرص على توفير تشكيلة واسعة من المكاتب، والكراسي الإدارية، ووحدات التخزين، وطاولات الاجتماعات، وغيرها من التجهيزات المكتبية التي تواكب المعايير العالمية في الراحة، والتنظيم، والجمالية. 
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
                تستند منتجاتنا إلى معايير دقيقة في اختيار المواد والتشطيب النهائي لضمان الأداء طويل الأمد وتوفير بيئة عمل أكثر إنتاجية واحترافية، وبفضل خبرتنا المتراكمة وثقة عملائنا، نُعدّ اليوم من الشركات الرائدة في قطاع الأثاث المكتبي داخل المملكة العربية السعودية.
              </Typography>
          
              <Button component={Link}  sx={{bgcolor:'#0334bb',color:'white' ,fontSize:{xs:'1rem',md:'1.2rem'}, transition:'all 0.4s ease', '&:hover':{bgcolor:'#0334ee',transition:'all 0.4s ease'}}}>عرض المزيد</Button>
          

            
            </Box>
          
          </Box>
        </Grid>
 {/* office Furniture Swiper */}
 <Grid item size={{xs:12,md:6}}>
          <Box
             data-aos="fade-right"
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
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Pagination, Autoplay]}
              className="mySwiper"
              loop={true}
              slidesPerView={1}
              initialSlide={0}


              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                duration: 600,
              }}
              style={{
                width: '350px',
                height: '400px',
              }}
            >
              {cardData.map((card) => (
                <SwiperSlide key={card.id}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      borderRadius: '18px',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src={card.image}
                      alt={card.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        overflow: 'hidden',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                        padding: '20px',
                        borderTopLeftRadius: '18px',
                        borderTopRightRadius: '18px',
                        borderRadius: '18px',
                      }}
                    >
                      <Typography
                        variant="h6"
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
              <div className="swiper-pagination" style={{ marginTop: '20px' }} />
            </Swiper>
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
  width: 10px !important;
  height: 10px !important;
  background: #ccc !important;
  opacity: 1 !important;
}

.swiper-pagination-bullet-active {
  background: #0334bb !important;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  border-radius: 18px;
  overflow: hidden;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;
