import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // const categories = await db.source.findMany({
  //   select: { name: true, name_ar: true, google_news_url: true, parent_category_id: true }
  // });

  // const res = await db.category.createMany({
  //   data: staticCategories,
  //   skipDuplicates: true
  // });

  // const sources = await db.source.findMany({
  //   select: { name: true }
  // });

  // const staticSources = [
  //   { name: 'Al Masry Al Youm - المصري اليوم' },
  //   { name: 'Sada El-Bald صدى البلد' },
  //   { name: 'Yallakora - يلاكورة' },
  //   { name: 'FilGoal.com' },
  //   { name: 'BBC Arabic' },
  //   { name: 'CNN Arabic' },
  //   { name: 'الحرة' },
  //   { name: 'القاهرة 24' },
  //   { name: 'الأسبوع' },
  //   { name: 'بوابة أخبار اليوم' },
  //   { name: 'الوطن' },
  //   { name: 'جريدة الدستور' },
  //   { name: 'البوابة نيوز' },
  //   { name: 'بوابة الأهرام' },
  //   { name: 'جريدة النهار المصرية' },
  //   { name: 'السعودية Investing.com' },
  //   { name: 'Alborsa News  جريدة البورصة' },
  //   { name: 'جريدة المال' },
  //   { name: 'مُباشِر' },
  //   { name: 'أموال الغد' },
  //   { name: 'اقتصاد الشرق مع Bloomberg' },
  //   { name: 'صحيفة الشرق الأوسط' },
  //   { name: 'المتداول العربي' },
  //   { name: 'شبكة رصد' },
  //   { name: 'نجوم مصرية' },
  //   { name: 'محتوي بلس' },
  //   { name: 'ديلي فوركس' },
  //   { name: 'news.elbadil.com' },
  //   { name: 'news.elganna.com' },
  //   { name: 'المساء سبورت' },
  //   { name: 'news.5lejnews.com' },
  //   { name: 'Hespress هسبريس' },
  //   { name: 'بوابة النيل الإخباري' },
  //   { name: 'ثقفني' },
  //   { name: 'أخبار الآن' },
  //   { name: 'ETبالعربي | ETbilarabi' },
  //   { name: 'MCD / مونت كارلو الدولية' },
  //   { name: 'لها' },
  //   { name: 'FilFan.com' },
  //   { name: 'عرب فايف' },
  //   { name: 'جريدة البشاير' },
  //   { name: 'الفجر' },
  //   { name: 'Lebanon24' },
  //   { name: 'هن - Honna' },
  //   { name: 'موقع شبابيك' },
  //   { name: 'الخليج 365' },
  //   { name: 'الخليج 24' },
  //   { name: 'الجرس' },
  //   { name: 'دنيا الوطن' },
  //   { name: 'قناة الجديد' },
  //   { name: 'النهار' },
  //   { name: 'مجلة سيدتي' },
  //   { name: 'Elfann.com' },
  //   { name: 'لايف' },
  //   { name: 'بالبلدي | BeL BaLaDy' },
  //   { name: 'جو 24' },
  //   { name: 'إقرأ نيوز الإخباري' },
  //   { name: 'بوابة الوفد الالكترونية ' },
  //   { name: 'بوابة روز اليوسف' },
  //   { name: 'معهد بوتقة' },
  //   { name: 'فيتو' },
  //   { name: 'أهل مصر' },
  //   { name: 'موقع 24 الإخباري' },
  //   { name: 'MATN NEWS' },
  //   { name: 'برس بي :' },
  //   { name: 'الخليج الان' },
  //   { name: 'إرم نيوز' },
  //   { name: 'مؤسسة اليوم الاخبارية' },
  //   { name: 'قضية رأي عام' },
  //   { name: 'MSN' },
  //   { name: 'بوابة العمال' },
  //   { name: 'Almashhad Alaraby' },
  //   { name: 'العين الرياضية' },
  //   { name: 'Copts-United' },
  //   { name: 'مصر تايمز' },
  //   { name: 'الموقع' },
  //   { name: 'الشروق' },
  //   { name: 'التلفزيون العربي' },
  //   { name: 'https://www.altreeq.com/ - موقع جريدة الطريق' },
  //   { name: 'كايرو لايف' },
  //   { name: 'بوابة الوسط' },
  //   { name: 'الجريدة العقارية Aleqaria News' },
  //   { name: 'صدى الأمة' },
  //   { name: 'خبرني' },
  //   { name: 'Al Mayadeen الميادين' },
  //   { name: 'الرئيس نيوز' },
  //   { name: 'بلدنا اليوم' },
  //   { name: 'دار الهلال' },
  //   { name: 'جريدة البيان' },
  //   { name: 'فرانس 24 / FRANCE 24' },
  //   { name: 'BBC' },
  //   { name: 'قناة الحرة - Alhurra' },
  //   { name: 'AlJazeera Arabic قناة الجزيرة' },
  //   { name: 'سبوتنيك' },
  //   { name: 'سكاي نيوز عربية' },
  //   { name: 'beIN SPORTS' },
  //   { name: 'ar.misrdy.com' },
  //   { name: 'المساء الاخباري' },
  //   { name: 'جريدة لحظات نيوز' },
  //   { name: 'اقتصاد سكاي نيوز عربية' },
  //   { name: 'أخبار الرياضة - سكاي نيوز عربية Sky News Arabia Sports' },
  //   { name: 'euronews (عــربي)' },
  //   { name: 'مصر النهاردة' },
  //   { name: 'الجزيرة نت' },
  //   { name: 'العربي الجديد' },
  //   { name: 'Alayam- صحيفة الايام البحرينية' },
  //   { name: 'صحيفة الوسط' },
  //   { name: 'الشرق للأخبار Asharq News' },
  //   { name: 'Al Arab' },
  //   { name: 'Alkhaleej Newspaper صحيفة الخليج ' },
  //   { name: 'Ad-Diyar' },
  //   { name: 'مانكيش نت ' },
  //   { name: 'alwasat.com.kw' },
  //   { name: 'الجريدة' },
  //   { name: 'رياضة' },
  //   { name: 'السياسة جريدة' },
  //   { name: ' الموقع الرسمي للنادي الأهلي المصري' },
  //   { name: 'كورة ارابيا' },
  //   { name: 'كووورة' },
  //   { name: 'مبتدا' },
  //   { name: 'الشرق رياضة  Asharq Sports ' },
  //   { name: 'نجوم اف ام' },
  //   { name: 'شبكة الهدف' },
  //   { name: 'tatweeg' },
  //   { name: 'صحيفة عدن تايم - نبقيك مع الحدث' },
  //   { name: 'Sada Elbalad - قناة صدى  البلد ' },
  //   { name: 'Btolat' },
  //   { name: 'جريدة صوت الأمه' },
  //   { name: 'Media 7 ' },
  //   { name: 'كورة 365' },
  //   { name: 'AlHadath الحدث' },
  //   { name: 'الصبح نيوز' },
  //   { name: 'BBC News عربي' },
  //   { name: 'الأهلي المصري' },
  //   { name: 'العربية DW' },
  //   { name: 'ahly.online - أهلي أون لاين' },
  //   { name: 'الزمالك اليوم' },
  //   { name: 'سبورت 360 سعودي' },
  //   { name: 'الأخبار المسائى' },
  //   { name: 'media24.ps' },
  //   { name: 'تحيا مصر' },
  //   { name: 'ONE3 Sports' },
  //   { name: 'واتس كورة' },
  //   { name: 'kora11' },
  //   { name: 'الشروق أونلاين' },
  //   { name: 'uae71.com' },
  //   { name: 'القدس العربي' },
  //   { name: 'بوابة دار المعارف' },
  //   { name: 'عربي21' },
  //   { name: 'وكالة العهد نيوز' },
  //   { name: 'خليجيون' },
  //   { name: 'البوابة' },
  //   { name: '26سبتمبر' },
  //   { name: 'شفق نيوز' },
  //   { name: 'ArabicPost | عربي بوست' },
  //   { name: 'سوا' },
  //   { name: 'البوصلة الاقتصادية' },
  //   { name: 'عرب 48' },
  //   { name: 'raialyoum' },
  //   { name: 'صحيفة المدرج الإلكترونية' },
  //   { name: 'Goal.com' },
  //   { name: 'Egy Africa' },
  //   { name: 'بوابة الغد' },
  //   { name: 'hihi2' },
  //   { name: 'العرب' },
  //   { name: 'موقع مصر الإخباري' },
  //   { name: 'الإمارات نيوز' },
  //   { name: 'نافذة على العالم' },
  //   { name: '365Scores' },
  //   { name: 'عين ليبيا' },
  //   { name: 'Hibapress ARABE' },
  //   { name: 'ميدل ايست اونلاين' },
  //   { name: 'موزاييك أف.أم' },
  //   { name: 'قناة الرشيد الفضائية' },
  //   { name: 'بوابة الفتح' },
  //   { name: 'أخبار 24' },
  //   { name: 'Roya News Arabic' },
  //   { name: 'Elconsolto -الكونسلتو' },
  //   { name: 'وردنا' },
  //   { name: 'النهار أونلاين' },
  //   { name: 'Alittihad Newspaper جريدة الاتحاد' },
  //   { name: 'اقلام حرة' },
  //   { name: 'أنفو سبورت' },
  //   { name: 'فلسطين أون لاين' },
  //   { name: 'زنقة 20' },
  //   { name: 'Casa24' },
  //   { name: 'elnabaa elwatany newspaper' },
  //   { name: '195 سبورتس' },
  //   { name: 'winwin' },
  //   { name: 'Ariffino' },
  //   { name: 'Al3omk' },
  //   { name: 'elbilad' },
  //   { name: 'Medi1TV Afrique' },
  //   { name: 'مرسال قطر' },
  //   { name: 'DW عربية' },
  //   { name: 'banker.news - موقع بانكير' },
  //   { name: 'إقرأ نيوز' },
  //   { name: 'المصريون' },
  //   { name: 'الكابتن' },
  //   { name: 'كشكول' },
  //   { name: 'السعودية نيوز' },
  //   { name: 'لاين نيوز' },
  //   { name: 'اتحاد الإذاعة والتلفزيون المصرى - الهيئة الوطنية للإعلام' },
  //   { name: 'المواطن' },
  //   { name: 'إعلام دوت كوم' },
  //   { name: 'درب' },
  //   { name: 'برلمانى' },
  //   { name: 'خدمات الخليج' },
  //   { name: 'الطاقة' },
  //   { name: 'ar.egyafrica.com' },
  //   { name: 'Khabar Masr : خبر مصر' },
  //   { name: 'الجنه نيوز' },
  //   { name: 'المستقبل' },
  //   { name: 'أسواق للمعلومات' },
  //   { name: 'صباح مصر' },
  //   { name: 'الصفقة' },
  //   { name: 'مجلة أرقام' },
  //   { name: 'Osoul Misr Magazine - مجلة أصول مصر' },
  //   { name: 'المطور' },
  //   { name: 'LBCI Lebanon' },
  //   { name: 'Euronews' },
  //   { name: 'sport.elwatannews.com' },
  //   { name: 'يلا مصر " رؤية مصر "' },
  //   { name: 'البديل' },
  //   { name: 'موقع بصراحة الإخباري' },
  //   { name: 'الموجز' },
  //   { name: 'Raseef22' },
  //   { name: 'القيادي | Alqiyady' },
  //   { name: 'Al Modon' },
  //   { name: 'صحيفة العراق' },
  //   { name: 'Mostaqbal Watan News' },
  //   { name: 'جريدة الأنباء الكويتية' },
  //   { name: 'خبر أبيض' },
  //   { name: 'موقع بالجول' },
  //   { name: 'المصري بلس الرياضي' },
  //   { name: 'moe.zajelpress.ps' },
  //   { name: 'new.l0n.news' },
  //   { name: 'نيوز ورلد' },
  //   { name: 'ألوان الوطن - Alwan' },
  //   { name: 'البيان الصحي' },
  //   { name: 'LebanonDebate' },
  //   { name: 'جريدة الأهرام الجديد الكندية' },
  //   { name: 'وكالة فلسطين اليوم الإخبارية' },
  //   { name: 'kataeb.org' },
  //   { name: 'Daily Sabah' },
  //   { name: 'المشهد' },
  //   { name: 'أخبار العصر' },
  //   { name: 'Ahly News' },
  //   { name: 'بوابة الاقتصاد' },
  //   { name: 'الديوان' },
  //   { name: 'بوابة بلوم' },
  //   { name: 'follow ict  فولو آي سي تي' },
  //   { name: 'بوابة الديار الإلكترونيه' },
  //   { name: 'بوابة الكلمة' },
  //   { name: 'thawra.sy' },
  //   { name: 'الاقتصادية' },
  //   { name: 'الراية' },
  //   { name: 'صحيفة عكاظ | Okaz Newspaper' },
  //   { name: 'صحيفة المرصد' },
  //   { name: 'عالم البورصة' },
  //   { name: 'اخبار كورة' },
  //   { name: 'bbc.com' },
  //   { name: 'نافذة العرب' },
  //   { name: 'تركيا الان' },
  //   { name: 'جريدة زمان التركية The Turkish Zaman Newspaper ' },
  //   { name: 'Al Yaum Newspaper' },
  //   { name: 'هاشتاغ' },
  //   { name: 'وكالة صفا' },
  //   { name: 'نيو ترك بوست' },
  //   { name: 'أريبيان بزنس' },
  //   { name: 'Al Bawaba' },
  //   { name: 'أوكرانيا بالعربية' },
  //   { name: 'الخليج أونلاين' },
  //   { name: 'AL24 News' },
  //   { name: 'وكالة وطن للأنباء' },
  //   { name: 'وكالة الصحافة المستقلة' },
  //   { name: 'وكالة بغداد اليوم الاخبارية' },
  //   { name: 'Ajel - أخبار دوليّة' },
  //   { name: 'وكالة الانباء العراقية' },
  //   { name: 'راديو سوا' },
  //   { name: 'موازين نيوز' },
  //   { name: 'خليج نيوز' },
  //   { name: 'البشاير كوتش' },
  //   { name: 'مصر مكس' },
  //   { name: 'زاجل بريس' },
  //   { name: 'سعودي صح' },
  //   { name: 'البوكس نيوز' },
  //   { name: 'news.alsaudinews.com' },
  //   { name: 'جريدة المصدر' },
  //   { name: 'كويت نيوز الالكترونية' },
  //   { name: 'حفريات' },
  //   { name: 'الزمان' },
  //   { name: 'Alfallah Alyoum - الفلاح اليوم' },
  //   { name: 'Aabbir' },
  //   { name: 'نبض الوطن' },
  //   { name: 'وكالة خبر للأنباء' },
  //   { name: 'اسواق الإخبارية' },
  //   { name: 'حرية برس horrya press' },
  //   { name: 'القاهرية' },
  //   { name: 'صوت بيروت إنترناشونال' },
  //   { name: 'بوابة مولانا' },
  //   { name: 'المركز الفلسطيني للإعلام' },
  //   { name: 'i24NEWS in Arabic' },
  //   { name: 'موقع التنوير' },
  //   { name: 'موقع و جريدة أخبار الناس اليوم' },
  //   { name: 'AlArabiya العربية' },
  //   { name: 'ایران اینترنشنال' },
  //   { name: 'AMAD MEDIA أمد للإعلام' },
  //   { name: 'أخبار قطر' },
  //   { name: 'elections.alwatannews.net' },
  //   { name: 'صدى البلد عقارات' },
  //   { name: 'Wingamer' },
  //   { name: 'مانشيتات' },
  //   { name: 'eg.newsmisr.info' },
  //   { name: 'مقالات نيوز' },
  //   { name: 'المصدر' },
  //   { name: 'الجزيرة مباشر' },
  //   { name: 'Mada Masr' },
  //   { name: 'مصر 365' },
  //   { name: 'شبكة رصد الإخبارية' },
  //   { name: 'وطن' },
  //   { name: 'ارب فينانس' },
  //   { name: 'بوابة الحرية والعدالة' },
  //   { name: 'EParena' },
  //   { name: 'وكالة خبر' },
  //   { name: 'السومريّة' },
  //   { name: 'أنا الخبر Analkhabar' },
  //   { name: 'المصري لايت' },
  //   { name: 'فوشيا' },
  //   { name: 'جوَّك' },
  //   { name: 'مصر البلد الإخبارية' },
  //   { name: 'منصة الاهرام الاخبارية' },
  //   { name: 'kora.saadaonline.net' },
  //   { name: 'المغرب24' },
  //   { name: 'alqudsnews.net' },
  //   { name: 'SWI swissinfo.ch سويسرا بالعربي' },
  //   { name: 'عنب بلدي' },
  //   { name: 'صحيفة الثورة' },
  //   { name: 'سانا' },
  //   { name: 'كورنر سبورت' },
  //   { name: 'وناسه مصريه' },
  //   { name: 'جريدة الملتقى الاقتصادي' },
  //   { name: 'new.elboox.com' },
  //   { name: 'يلا شووت' },
  //   { name: 'بوابة نيوز مصر' },
  //   { name: 'المختصر نيوز' },
  //   { name: 'قدس برس' },
  //   { name: 'Sada Misr' },
  //   { name: 'أخبارنا المغربية' },
  //   { name: 'المؤتمر نت' },
  //   { name: 'Al Sharq' },
  //   { name: 'FxNewsToday.ae' },
  //   { name: 'alwatannews.net' },
  //   { name: 'بنوك مصر' },
  //   { name: 'جريدة الوطن' },
  //   { name: 'كورة بلس' },
  //   { name: 'جريدة المغرب' },
  //   { name: 'Babnet' },
  //   { name: 'مزمز' },
  //   { name: 'صحيفة سبق' },
  //   { name: 'جنوبية' },
  //   { name: 'المجد' },
  //   { name: 'Anadolu Agency | العربية' },
  //   { name: 'kech24' },
  //   { name: 'ترقيصة' },
  //   { name: 'alseyassah.com' },
  //   { name: 'صحيفة المواطن الإلكترونية' },
  //   { name: 'Transfer Mercato' },
  //   { name: 'مجلة الرجل' },
  //   { name: 'جـريـدة الوطن' },
  //   { name: 'Panet' },
  //   { name: 'مرصد الشرق الأوسط وشمال أفريقيا الإعلامي' },
  //   { name: 'موقع اقتصادنا الاخباري' },
  //   { name: 'alwatan.ae' },
  //   { name: 'موقع ملاعب الرياضي' },
  //   { name: 'Orient أورينت' },
  //   { name: 'وكالة الانباء والمعلومات الفلسطينية' },
  //   { name: 'الهيئة العامة للإذاعة والتلفزيون' },
  //   { name: 'جهينة نيوز' },
  //   { name: 'القدس' },
  //   { name: 'factjo.com' },
  //   { name: 'مدار نيوز' },
  //   { name: 'قناة الغد' },
  //   { name: 'البلد نيوز' },
  //   { name: 'صحيفة المجاردة اليوم' },
  //   { name: 'موقع إضاءات الإخباري' },
  //   { name: 'وكالة عمون الاخبارية' },
  //   { name: 'شمس أف أم' },
  //   { name: 'شبكة قدس الإخبارية' },
  //   { name: 'Al Jazeera Mubasher قناة الجزيرة مباشر' },
  //   { name: 'qudsn.co' },
  //   { name: 'Alghad TV - قناة الغد' },
  //   { name: 'Anadolu Ajansı' },
  //   { name: 'ترك برس' },
  //   { name: 'وكالة أنباء تركيا' },
  //   { name: 'الشوري' },
  //   { name: 'Tasnim News Agency' },
  //   { name: 'أخبار الوطن' },
  //   { name: 'VDL NEWS' },
  //   { name: 'القلعة نيوز' },
  //   { name: 'عربي بوست' },
  //   { name: 'Zamn Press' },
  //   { name: 'Yeni Şafak Arabic' },
  //   { name: 'سما الاخبارية' },
  //   { name: ' اليوم 24' },
  //   { name: 'CGTN' },
  //   { name: 'صيدا أون لاين' },
  //   { name: 'Elnashra.com' },
  //   { name: 'المصدر أونلاين' },
  //   { name: 'شفقنا العربي' },
  //   { name: 'وكالة المعلومة' },
  //   { name: 'صحيفة السوسنة الأردنية' },
  //   { name: 'الخنادق' },
  //   { name: 'Middle East Transparent' },
  //   { name: 'Alfajer TV' },
  //   { name: 'وكالة النبأ' },
  //   { name: 'ZagrosNews' },
  //   { name: 'تايمز أوف إسرائيل' },
  //   { name: 'ZAWYA' },
  //   { name: 'وكالة أهل البيت (ع) للأنباء – ابنا' },
  //   { name: 'صوت العراق' },
  //   { name: 'جريدة العدد الأول' },
  //   { name: 'بلجيكا 24 - اخبار بلجيكا' },
  //   { name: 'الرأي' },
  //   { name: 'الحدث' },
  //   { name: 'وان ثري' },
  //   { name: 'النبأ' },
  //   { name: 'جريدة كابيتال نيوز' },
  //   { name: 'بوابة أخبار 24 ساعة' },
  //   { name: 'newsy.elsob7.com' },
  //   { name: 'جريدة آخر الأخبار' },
  //   { name: 'أورينت نيوز - Orient' },
  //   { name: 'كندا بالعربي 24' },
  //   { name: 'بلد نيوز' },
  //   { name: 'شبكة راية الإعلامية' },
  //   { name: 'آكي' },
  //   { name: 'مصر بوست' },
  //   { name: 'new.akher.news' },
  //   { name: 'gate.bald-news.com' },
  //   { name: 'بوابة الصبح' },
  //   { name: 'news.kol7asry.news' },
  //   { name: 'ميركاتو' },
  //   { name: 'ليبيا جيل' },
  //   { name: 'وكالة زاد الاردن الاخبارية' },
  //   { name: 'جريدة الرياض' },
  //   { name: 'المنتصف نت' },
  //   { name: 'جريدة الرياضية' },
  //   { name: 'صحيفة سبورت السعودية' },
  //   { name: 'صحيفة صدى الالكترونية' },
  //   { name: 'الجمهورية ' },
  //   { name: 'aliwaa.com.lb' },
  //   { name: 'rumonline.net وكالة أنباء رم' },
  //   { name: 'الغد' },
  //   { name: 'Badil.info' },
  //   { name: 'خبرنا' },
  //   { name: 'رياضة العرب' },
  //   { name: 'koooragooal.com' },
  //   { name: ' مسبار |  misbar' },
  //   { name: 'صحيفة الحدث' },
  //   { name: 'sarayanews.com' },
  //   { name: 'alfantime.news' },
  //   { name: 'Musicnation - ميوزيك نايشن' },
  //   { name: 'أخبار الإمارات' },
  //   { name: 'عالم الطاقة' },
  //   { name: 'صحراء ميديا' },
  //   { name: 'الخبر' },
  //   { name: 'الأحداث المغربية' },
  //   { name: 'Tuniscope' },
  //   { name: 'studio.dostor.org' },
  //   { name: 'صباح أكادير' },
  //   { name: 'وطنى' },
  //   { name: 'زاجل للاعلام' },
  //   { name: 'news.iqraa.news' },
  //   { name: 'صحيفة Ajel' },
  //   { name: 'صحيفة مكة' },
  //   { name: 'jehat.net' },
  //   { name: 'Saudi Press Agency' },
  //   { name: 'شبكة عيون الإخبارية' },
  //   { name: 'البورصة نيوز' },
  //   { name: 'news.akhbrna.co' },
  //   { name: 'جامعة بنها' },
  //   { name: 'EconomyPlus  إيكونومي بلس' },
  //   { name: 'جريدة حابي' },
  //   { name: 'nws.darbahora.com' },
  //   { name: 'جفرا نيوز' },
  //   { name: 'الشبكة نيوز' },
  //   { name: 'Al Madina Newspaper - جريدة المدينة' },
  //   { name: 'achtari24' },
  //   { name: 'Man Utd' },
  //   { name: 'كريتر نت' },
  //   { name: 'هاي كورة – النسخة السعودية' },
  //   { name: 'هبة سبور' },
  //   { name: 'wtkora.com' },
  //   { name: 'maqar.com' },
  //   { name: 'الدستور' },
  //   { name: 'صحيفة البلاد - Albiladdaily' },
  //   { name: 'Manchester City FC' },
  //   { name: 'el-massa' },
  //   { name: 'أخبار الخليج' },
  //   { name: 'بوابة خليج الأخبارية' },
  //   { name: 'وصال الاخباري' },
  //   { name: 'جي السعودي' },
  //   { name: 'يلا شوت' }
  // ];

  // const res = await db.source.createMany({
  //   data: staticSources,
  //   skipDuplicates: true
  // });

  // const productColors = await db.productColor.findMany({
  //   select: { name: true, value: true }
  // });

  // const staticColors = [
  //   { name: 'أسود', value: '#000' },
  //   { name: 'رمادي', value: '#808080' },
  //   { name: 'فضي', value: '#C0C0C0' },
  //   { name: 'أبيض', value: '#fff' },
  //   { name: 'أحمر', value: '#FF0000' },
  //   { name: 'أخضر', value: '#308000' },
  //   { name: 'لموني', value: '#00FF00' },
  //   { name: 'برتقالي', value: '#ffa500' },
  //   { name: 'أصفر', value: '#FFFF00' },
  //   { name: 'أزرق', value: '#00F' }
  // ];

  // const res = await db.productColor.createMany({
  //   data: staticColors,
  //   skipDuplicates: true
  // });

  // const productSizes = await db.productSize.findMany({
  //   select: { name: true, value: true }
  // });

  // const staticSizes = [
  //   { name: '40', value: '40' },
  //   { name: '41', value: '41' },
  //   { name: '42', value: '42' },
  //   { name: '43', value: '43' },
  //   { name: '44', value: '44' },
  //   { name: '45', value: '45' },
  //   { name: '46', value: '46' },
  //   { name: '47', value: '47' },
  //   { name: '48', value: '48' },
  //   { name: '49', value: '49' },
  //   { name: '50', value: '50' },
  //   { name: '51', value: '51' },
  //   { name: '52', value: '52' },
  //   { name: '53', value: '53' }
  // ];

  // const res = await db.productSize.createMany({
  //   data: staticSizes,
  //   skipDuplicates: true
  // });

  // const productColors = await db.productColor.findMany({
  //   select: { name: true, value: true }
  // });

  // const staticColors = [
  //   { name: 'أسود', value: '#000' },
  //   { name: 'رمادي', value: '#808080' },
  //   { name: 'فضي', value: '#C0C0C0' },
  //   { name: 'أبيض', value: '#fff' },
  //   { name: 'أحمر', value: '#FF0000' },
  //   { name: 'أخضر', value: '#308000' },
  //   { name: 'لموني', value: '#00FF00' },
  //   { name: 'برتقالي', value: '#ffa500' },
  //   { name: 'أصفر', value: '#FFFF00' },
  //   { name: 'أزرق', value: '#00F' }
  // ];

  // const res = await db.productColor.createMany({
  //   data: staticColors,
  //   skipDuplicates: true
  // });

  // const productSizes = await db.productSize.findMany({
  //   select: { name: true, value: true }
  // });

  // const staticSizes = [
  //   { name: '40', value: '40' },
  //   { name: '41', value: '41' },
  //   { name: '42', value: '42' },
  //   { name: '43', value: '43' },
  //   { name: '44', value: '44' },
  //   { name: '45', value: '45' },
  //   { name: '46', value: '46' },
  //   { name: '47', value: '47' },
  //   { name: '48', value: '48' },
  //   { name: '49', value: '49' },
  //   { name: '50', value: '50' },
  //   { name: '51', value: '51' },
  //   { name: '52', value: '52' },
  //   { name: '53', value: '53' }
  // ];

  // const res = await db.productSize.createMany({
  //   data: staticSizes,
  //   skipDuplicates: true
  // });

  // const categoriesWithSources = await db.category.findMany({
  //   include: {
  //     source: {
  //       select: {
  //         id: true,
  //         name: true,
  //         url: true,
  //         scrapable: true,
  //         content_selector: true
  //       }
  //     }
  //   }
  // });

  // const sources = await db.source.findMany({
  //   select: {
  //     id: true,
  //     name: true,
  //     url: true,
  //     scrapable: true,
  //     content_selector: true
  //   }
  // });

  const categories = await db.category.findMany({
    select: { id: true, name: true, name_ar: true, google_news_url: true, parent_category_id: true }
  });

  return NextResponse.json({ status: 200, categories });
}
