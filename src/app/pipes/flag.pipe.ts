import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFlag',
})
export class FlagPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return value;
  // }
  transform(nationality: string): string {
    const countryMap: Record<string, string> = {
      'Great Britain': 'gb',
      'United Kingdom': 'gb',
      Netherlands: 'nl',
      Spain: 'es',
      Germany: 'de',
      France: 'fr',
      Australia: 'au',
      Canada: 'ca',
      Italian: 'it',
      Italy: 'it',
      Japan: 'jp',
      Finland: 'fi',
      Mexico: 'mx',
      Brazil: 'br',
      USA: 'us',
      'United States': 'us',
      Belgium: 'be',
      Austria: 'at',
      Switzerland: 'ch',
      Sweden: 'se',
      Russia: 'ru',
      China: 'cn',
      Thailand: 'th',
      Denmark: 'dk',
      'New Zealander': 'nz',
      Poland: 'pl',
      India: 'in',
      Venezuela: 've',
      Argentina: 'ar',
      Monaco: 'mc',
      Indonesia: 'id',
      'South Africa': 'za',
      Ireland: 'ie',
      Malaysia: 'my',
      'Czech Republic': 'cz',
      Hungary: 'hu',
      Portugal: 'pt',
      'United Arab Emirates': 'ae',
      Colombia: 'co',
      Argentine: 'ar',
    };

    const code = countryMap[nationality];
    return code
      ? `https://flagcdn.com/${code}.svg`
      : 'assets/flags/default.svg';
  }
}
