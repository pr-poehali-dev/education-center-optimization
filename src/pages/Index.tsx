import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">МедОбразование</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#programs" className="text-sm font-medium hover:text-accent transition-colors">Программы</a>
            <a href="#formats" className="text-sm font-medium hover:text-accent transition-colors">Форматы</a>
            <a href="#benefits" className="text-sm font-medium hover:text-accent transition-colors">Преимущества</a>
            <a href="#news" className="text-sm font-medium hover:text-accent transition-colors">Новости</a>
            <a href="#faq" className="text-sm font-medium hover:text-accent transition-colors">FAQ</a>
            <a href="#contacts" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <Icon name="Eye" size={16} />
              Версия для слабовидящих
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="LogIn" size={16} className="mr-2" />
              Личный кабинет
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Лицензия на образовательную деятельность
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Профессиональное медицинское образование дистанционно
              </h1>
              <p className="text-lg text-white/90">
                Повышение квалификации, профпереподготовка и НМО для врачей и среднего медперсонала. 
                Государственные дипломы и удостоверения с доставкой по всей России.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Dialog open={formOpen} onOpenChange={setFormOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                      <Icon name="MessageSquare" className="mr-2" size={20} />
                      Получить консультацию
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Заявка на консультацию</DialogTitle>
                      <DialogDescription>
                        Оставьте контакты, и наш специалист свяжется с вами в течение часа
                      </DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input id="name" placeholder="Иван Иванов" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                      </div>
                      <div>
                        <Label htmlFor="message">Вопрос (необязательно)</Label>
                        <Textarea id="message" placeholder="Интересует программа..." />
                      </div>
                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Icon name="Search" className="mr-2" size={20} />
                  Подобрать программу
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Быстрая заявка</CardTitle>
                  <CardDescription className="text-white/80">
                    Оставьте контакты — перезвоним в течение 15 минут
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя" 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67" 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Что вас интересует? (необязательно)" 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 resize-none"
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
                      <Icon name="Send" className="mr-2" size={18} />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="formats" className="py-16 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Форматы обучения</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите формат, который подходит именно вам — от коротких программ до полной переподготовки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Award", title: "Профпереподготовка", desc: "От 250 часов, получение новой специальности", color: "text-blue-600" },
              { icon: "TrendingUp", title: "Повышение квалификации", desc: "От 16 часов, обновление знаний", color: "text-green-600" },
              { icon: "Heart", title: "НМО", desc: "Программы с баллами непрерывного медобразования", color: "text-red-600" },
              { icon: "Briefcase", title: "Тематическое усовершенствование", desc: "Узкоспециализированные курсы", color: "text-purple-600" }
            ].map((format, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Icon name={format.icon} className={`h-12 w-12 mb-3 ${format.color}`} />
                  <CardTitle className="text-lg">{format.title}</CardTitle>
                  <CardDescription>{format.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-16 px-4 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Образовательные программы</h2>
            <p className="text-muted-foreground">Три направления для разных категорий специалистов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Icon name="Stethoscope" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Для врачей</CardTitle>
                <CardDescription>Программы для специалистов с высшим медицинским образованием</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-0.5" size={18} />
                    <span className="text-sm">Все медицинские специальности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-0.5" size={18} />
                    <span className="text-sm">Дипломы гос. образца</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-0.5" size={18} />
                    <span className="text-sm">Баллы НМО включены</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Смотреть программы
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Icon name="User" className="text-green-600" size={24} />
                </div>
                <CardTitle>Для медперсонала</CardTitle>
                <CardDescription>Программы для среднего медицинского персонала</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-0.5" size={18} />
                    <span className="text-sm">Медсёстры, фельдшеры, акушеры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-0.5" size={18} />
                    <span className="text-sm">Удостоверения гос. образца</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-0.5" size={18} />
                    <span className="text-sm">Аккредитация учтена</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Смотреть программы
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Icon name="Building" className="text-purple-600" size={24} />
                </div>
                <CardTitle>Для организаций</CardTitle>
                <CardDescription>Программы для специалистов и немедицинских категорий</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-0.5" size={18} />
                    <span className="text-sm">Групповое обучение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-0.5" size={18} />
                    <span className="text-sm">Индивидуальные программы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-0.5" size={18} />
                    <span className="text-sm">Сертификаты и свидетельства</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Смотреть программы
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Какие документы вы получите</h2>
            <p className="text-muted-foreground">Все документы государственного образца с внесением в федеральные реестры</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="h-32 w-32 mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center">
                <Icon name="FileText" className="text-blue-600" size={48} />
              </div>
              <h3 className="font-semibold text-lg">Диплом</h3>
              <p className="text-sm text-muted-foreground">
                О профессиональной переподготовке (от 250 часов) — даёт право работать по новой специальности
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-32 w-32 mx-auto bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center">
                <Icon name="ScrollText" className="text-green-600" size={48} />
              </div>
              <h3 className="font-semibold text-lg">Удостоверение</h3>
              <p className="text-sm text-muted-foreground">
                О повышении квалификации (от 16 часов) — подтверждает обновление профессиональных знаний
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-32 w-32 mx-auto bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center">
                <Icon name="Award" className="text-purple-600" size={48} />
              </div>
              <h3 className="font-semibold text-lg">Свидетельство</h3>
              <p className="text-sm text-muted-foreground">
                О тематическом усовершенствовании — подтверждает прохождение специализированного курса
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 px-4 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Преимущества обучения</h2>
            <p className="text-muted-foreground">Почему выбирают нас тысячи медицинских специалистов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Clock", title: "Гибкий график", desc: "Учитесь в удобное время без отрыва от работы" },
              { icon: "Laptop", title: "Дистанционно", desc: "Из любой точки России, нужен только интернет" },
              { icon: "ShieldCheck", title: "Лицензия", desc: "Все программы лицензированы, документы — в реестре ФИС ФРДО" },
              { icon: "CreditCard", title: "Рассрочка", desc: "Оплата частями без переплат и скрытых комиссий" },
              { icon: "Truck", title: "Доставка", desc: "Бесплатная доставка документов почтой России" },
              { icon: "HeadphonesIcon", title: "Поддержка 24/7", desc: "Персональный куратор на связи в любое время" }
            ].map((benefit, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <Icon name={benefit.icon} className="h-10 w-10 mb-3 text-accent" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-16 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Новости и акции</h2>
            <p className="text-muted-foreground">Актуальные предложения и важные обновления</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-accent/20 hover:border-accent transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-accent to-accent/80 text-white p-6">
                <Badge className="bg-white/20 text-white border-white/30 mb-3">Акция</Badge>
                <h3 className="text-2xl font-bold mb-2">Скидка 20%</h3>
                <p className="text-white/90">на все программы НМО</p>
              </div>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Специальное предложение для врачей! Успейте записаться на программы непрерывного медицинского образования со скидкой.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Icon name="Calendar" size={16} />
                  <span>До 31 января 2025</span>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Новость</Badge>
                <CardTitle className="text-lg">Новые программы для медсестёр</CardTitle>
                <CardDescription>24 декабря 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Мы запустили 15 новых программ повышения квалификации для среднего медперсонала по актуальным направлениям.
                </p>
                <Button variant="outline" className="w-full">
                  Смотреть программы
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Новость</Badge>
                <CardTitle className="text-lg">Обновление платформы LMS</CardTitle>
                <CardDescription>20 декабря 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Личный кабинет стал ещё удобнее! Новый интерфейс, мобильное приложение и интерактивные тесты.
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-green-400 transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-100 text-green-700">Акция</Badge>
                <CardTitle className="text-lg">Групповое обучение</CardTitle>
                <CardDescription>Специальное предложение</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Скидка до 30% при записи от 5 человек! Идеально для клиник и медицинских центров.
                </p>
                <Button variant="outline" className="w-full">
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Новость</Badge>
                <CardTitle className="text-lg">Партнёрство с НМО</CardTitle>
                <CardDescription>15 декабря 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Наш центр официально аккредитован на портале НМО. Все баллы начисляются автоматически.
                </p>
                <Button variant="outline" className="w-full">
                  Читать новость
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-100 text-blue-700">Вебинар</Badge>
                <CardTitle className="text-lg">Бесплатный вебинар</CardTitle>
                <CardDescription>28 декабря в 15:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  "Современные подходы в терапии". Приглашаем всех желающих на открытый вебинар с сертификатом.
                </p>
                <Button variant="outline" className="w-full">
                  Зарегистрироваться
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Icon name="Newspaper" className="mr-2" size={20} />
              Все новости
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 px-4 bg-secondary/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Частые вопросы</h2>
            <p className="text-muted-foreground">Ответы на популярные вопросы о дистанционном обучении</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold text-left">Законно ли дистанционное медицинское образование?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, полностью законно. Дистанционный формат обучения разрешён Федеральным законом №273-ФЗ "Об образовании". 
                Все наши программы имеют государственную лицензию, а документы вносятся в федеральный реестр ФИС ФРДО.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold text-left">Как получить баллы НМО?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Многие наши программы включают баллы НМО. После успешного завершения курса баллы автоматически начисляются 
                в вашем личном кабинете на портале НМО. Количество баллов зависит от программы и её продолжительности.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold text-left">Сколько длится обучение?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Сроки зависят от программы: тематическое усовершенствование — от 16 часов (1-2 недели), 
                повышение квалификации — от 72 часов (2-4 недели), профпереподготовка — от 250 часов (2-6 месяцев). 
                Вы можете учиться в своём темпе.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold text-left">Можно ли оплатить частями?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы предоставляем рассрочку без процентов и переплат. Вы можете разбить оплату на 2-4 платежа. 
                Условия рассрочки обсуждаются индивидуально с менеджером при оформлении заявки.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold text-left">Как получить документ об образовании?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                После успешной сдачи итоговой аттестации мы изготавливаем документ (диплом/удостоверение/свидетельство) 
                и отправляем почтой России бесплатно. Доставка занимает 7-14 дней в зависимости от региона.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold text-left">Есть ли гарантии качества обучения?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы предоставляем договор с гарантией качества. Если программа не подойдёт в первую неделю обучения, 
                мы вернём 100% оплаты. Наши преподаватели — практикующие врачи и кандидаты медицинских наук.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-accent/90 to-accent text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли подходящую программу?</h2>
          <p className="text-lg mb-8 text-white/90">
            Оставьте заявку, и мы подберём курс под ваши потребности или разработаем индивидуальную программу
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-accent hover:bg-white/90">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Заказать звонок
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Заказать обратный звонок</DialogTitle>
                  <DialogDescription>
                    Укажите удобное время, и мы вам перезвоним
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="callback-name">Ваше имя</Label>
                    <Input id="callback-name" placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <Label htmlFor="callback-phone">Телефон</Label>
                    <Input id="callback-phone" type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label htmlFor="callback-time">Удобное время</Label>
                    <Input id="callback-time" type="time" />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Жду звонка
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать на почту
            </Button>
          </div>
        </div>
      </section>

      <footer id="contacts" className="py-12 px-4 bg-primary text-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" className="h-6 w-6" />
                <span className="font-bold">МедОбразование</span>
              </div>
              <p className="text-sm text-white/80">
                Профессиональное дистанционное обучение для медицинских работников
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Программы</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Для врачей</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Для медперсонала</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Для организаций</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Каталог программ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика ПДн</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>8 (800) 000-00-00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@medcenter.ru</span>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="hover:text-white transition-colors">
                    <Icon name="MessageCircle" size={20} />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Icon name="Send" size={20} />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Icon name="Youtube" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/20 text-center text-sm text-white/60">
            <p>© 2024 МедОбразование. Все права защищены. Лицензия на образовательную деятельность</p>
          </div>
        </div>
      </footer>
    </div>
  );
}