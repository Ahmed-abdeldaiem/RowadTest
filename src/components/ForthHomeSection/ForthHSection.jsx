
import React, { useEffect } from 'react';
import { Box, Typography, Grid, useTheme, Button  } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const cardData = [
  { id: 1, title: 'طاولة دراسة', image: 'https://5.imimg.com/data5/GH/HK/MY-37849122/student-school-bench-500x500.jpg' },
  { id: 2, title: 'مكاتب مدرسين', image: 'https://image.made-in-china.com/202f0j00UZltuOzhIgpR/School-K1-K12-Classroom-Office-Furniture-Wooden-HDF-MDF-Metal-Frame-Fixed-Single-Teacher-Worker-Desk-Table-with-3-Drawers-for-1-People.webp' },
  { id: 3, title: 'مكاتب إدارية', image: 'https://mskn.app/storage/app/ads_images/7aZWJsY9ou2YF0m20Iov.jpeg' },
  { id: 4, title: 'مكتبة', image: 'https://www.aljarida.com/jarida/uploads/images/2024/03/18/256795.jpg' },
  { id: 5, title: 'كرسي', image: 'https://s.alicdn.com/@sc04/kf/Ha035b1db191e47bc84eace0aefbe7863F.jpg' },
  { id: 6, title: 'طاولة كمبيوتر', image: 'https://s.alicdn.com/@sc04/kf/HTB1BoreXyDxK1RjSsphq6zHrpXaG.jpg_720x720q50.jpg' },
  { id: 7, title: 'ستاند', image: 'https://m.media-amazon.com/images/I/71O7cD6efuL.jpg' },
  { id: 8, title: 'مدرجات', image: 'https://agadirinfo.ma/wp-content/uploads/2016/11/6011b3893099d.jpg' },
  
];



export default function ForthHSection() {
  const theme = useTheme();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);




  return <>
  
  <Box  sx={{ display:'flex', flexDirection:'column', alignItems:'center' ,overflow:'hidden',  paddingTop:2, paddingBottom: 6,px:{xs:2,lg:4}, lg:{px: 8}, md: {px:4}, xs:{px:2} }}>
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
          الأثاث التعليمي 
        </Typography>
      
      </Box>

      {/* الاثاث التعليمي */}
      <Grid container   spacing={4} sx={{ mb: 6 , width:'100%'  }}>

 {/* learn Furniture Swiper */}
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
              speed={800}
              effect={'flip'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              flipEffect={{
                slideShadows: true,
                limitRotation: true,
              }}
              modules={[EffectFlip, Pagination, Autoplay]}
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
                duration: 800,
              }}
              style={{
                width: '100%',
                maxWidth: '400px',
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
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        transition: 'all 0.4s ease',
                      }
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
                        objectPosition: 'center',
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

       {/* learn Furniture paragraph */}
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
تُقدّم مؤسسة رواد البنيان للتجارة حلولاً متكاملة في مجال الأثاث التعليمي، مصممة خصيصًا لتلبية احتياجات المدارس، والجامعات، والمعاهد، والمراكز التدريبية، بما يضمن بيئة تعليمية مريحة وآمنة ومحفّزة على التعلّم. 

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
                تشمل منتجات المؤسسة طاولات وكراسي طلابية، ومكاتب معلمين، وخزائن تخزين، وألواح كتابة، ومقاعد مختبرات، بالإضافة إلى تجهيزات الفصول الذكية الحديثة.

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
يتميّز الأثاث التعليمي المُقدَّم بالمتانة وسهولة النقل والتنظيف، مع الالتزام بمعايير الجودة والسلامة التي تضمن الاستخدام طويل الأمد، كما تُوفّر المؤسسة خيارات متنوعة من حيث الأحجام والألوان والتصاميم لتتناسب مع الفئات العمرية المختلفة والمراحل الدراسية المتنوعة.
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
`;