// Custom Serbian Moment.js Locale File
// Based on https://github.com/moment/moment/blob/develop/locale/da.js - and props to Ulrik Nielsen (https://github.com/mrbase) for that :)

moment.locale('sr', {
  months : 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
  monthsShort : 'jan_feb_mar_apr_maj_jun_jul_avg_sep_okt_nov_dec'.split('_'),
  weekdays : 'nedelja_ponedeljak_utorak_sreda_cetvrtak_petak_subota'.split('_'),
  weekdaysShort : 'ned_pon_uto_sre_cet_pet_sub'.split('_'),
  weekdaysMin : 'ne_po_ut_sr_ce_pe_su'.split('_'),
  longDateFormat : {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'DD/MM/YYYY',
    LL : 'D. MMMM YYYY',
    LLL : 'D. MMMM YYYY HH:mm',
    LLLL : 'dddd [d.] D. MMMM YYYY HH:mm'
  },
  calendar : {
    sameDay: '[Danas] LT',
    nextDay: '[Sutra] LT',
    nextWeek: 'dddd [kl.] LT',
    lastDay: '[Juce] LT',
    lastWeek: '[sidste] dddd [kl] LT',
    sameElse: 'L'
  },
  relativeTime : {
    future : 'za %s',
    past : '%s pre',
    s : 'sekundi',
    m : 'minuta',
    mm : '%d minuta',
    h : 'sati',
    hh : '%d timer',
    d : 'dan',
    dd : '%d dana',
    M : 'mesec',
    MM : '%d meseci',
    y : 'godina',
    yy : '%d godina'
  },
  ordinalParse: /\d{1,2}\./,
  ordinal : '%d.',
  week : {
    dow : 1, // Monday is the first day of the week.
    doy : 4  // The week that contains Jan 4th is the first week of the year.
  }
});
