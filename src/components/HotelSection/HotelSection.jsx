
import React, { useEffect } from 'react';
import { Box, Typography, Grid, useTheme, Button  } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const cardData = [
  { id: 1, title: 'أسرة فندقية', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/ThirdHomeSection-hotelFur/TS1.jpg' },
  { id: 2, title: 'خزائن ملابس', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/ThirdHomeSection-hotelFur/TS2-1.jpg' },
  { id: 3, title: 'كرسي', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/ThirdHomeSection-hotelFur/TS3-1.jpg' },
  { id: 4, title: 'طاولة إستقبال', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/ThirdHomeSection-hotelFur/TS4.webp' },
  { id: 5, title: 'مكتب استقبال ', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/ThirdHomeSection-hotelFur/TS5-1.jpg' },
  { id: 6, title: 'خزائن ملفات', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/ThirdHomeSection-hotelFur/TS6.jpg' },
  { id: 7, title: 'طاولة جانبية', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/ThirdHomeSection-hotelFur/TS7.jpg' },
  { id: 8, title: 'كنب استقبال', image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/ThirdHomeSection-hotelFur/TS8.webp' },
];




export default function HotelSection() {
  const theme = useTheme();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);



  return <>
  
  <Box  sx={{ display:'flex', flexDirection:'column', alignItems:'center' ,overflow:'hidden', paddingTop:2, paddingBottom: 6,px:{xs:2,lg:4}, lg:{px: 8}, md: {px:4}, xs:{px:2} }}>
      {/*  Hotel Overview Section */}
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
          الأثاث الفندقي 
        </Typography>
      
      </Box>

      {/* الاثاث الفندقي */}
      <Grid container   spacing={4} sx={{ mb: 6 , width:'100%'  }}>
       {/* hotel Furniture paragraph */}
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
تُقدّم مؤسسة رواد البنيان للتجارة حلولاً متكاملة في مجال الأثاث الفندقي، تجمع بين الأناقة والوظيفية والمتانة لتلبية متطلبات قطاع الضيافة والارتقاء بتجربة النزلاء. 
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
تتنوع تشكيلتها لتشمل أثاث غرف النزلاء من أسِرّة فندقية عالية الجودة، وخزائن، وطاولات جانبية، ومكاتب، إلى جانب الأثاث المخصص للمناطق العامة مثل ردهات الاستقبال وصالات الانتظار والمطاعم. 
              </Typography>

              <Typography
                data-aos="fade-up"
                data-aos-delay="400"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  fontSize: '1.4rem',
                  textShadow: '1px 1px 1px rgba(0,0,0,0.5)'
                  , textAlign: 'justify'
                }}
              >
كما تلتزم المؤسسة بأعلى معايير التصنيع والتشطيب، وتولي اهتماماً خاصاً باختيار المواد التي تمتاز بالتحمل وسهولة الصيانة، مما يجعلها الخيار المثالي للفنادق والمنتجعات والشقق الفندقية التي تبحث عن أثاث عملي وفاخر يعكس هوية المكان ويعزز راحة الضيوف. 
              </Typography>
          
              <Button component={Link}  sx={{bgcolor:'#0334bb',color:'white' ,fontSize:{xs:'1rem',md:'1.2rem'}, transition:'all 0.4s ease', '&:hover':{bgcolor:'#0334ee',transition:'all 0.4s ease'}}}>عرض المزيد</Button>
          

            
            </Box>
          
          </Box>
        </Grid>
 {/* hotel Furniture Swiper */}
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
              effect={'cube'}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              speed={700}
              
              initialSlide={0}
              modules={[EffectCube, Pagination, Autoplay]}
              className="mySwiper"
              loop={true}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                duration: 700,
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
                      transition: 'all .4s ease',
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
  transition: all 0.4s ease;
}

.swiper-pagination-bullet {
  width: 10px !important;
  height: 10px !important;
  background: #ccc !important;
  opacity: 1 !important;
  
  transition: all 0.4s ease;
}

.swiper-pagination-bullet-active {
  background: #0334bb !important;
  
  transition: all 0.4s ease;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  border-radius: 18px;
  overflow: hidden;
  transition: all 0.4s ease;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  transition: all 0.4s ease;
}
`;