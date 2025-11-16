import React from 'react';
import useI18n from '@/hooks/useI18n';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, DollarSign, Users, Globe } from 'lucide-react';

const LanguageDemo = () => {
  const {
    t,
    language,
    formatDate,
    formatNumber,
    formatCurrency,
    isRTL,
    textAlign,
  } = useI18n();

  const demoDate = new Date();
  const demoNumber = 1234567.89;
  const demoAmount = 1500.5;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="w-5 h-5" />
          {t('demo.title') || 'Language Demo'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">{t('demo.currentLanguage') || 'Current Language'}</h3>
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-mono">{language}</p>
            <p className="text-sm text-muted-foreground">
              {t('demo.direction') || 'Text Direction:'} {isRTL ? 'RTL' : 'LTR'}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">{t('demo.translation') || 'Translation'}</h3>
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-mono">{t('demo.hello') || 'Hello, world!'}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {t('demo.keyExample') || 'This text is translated using the key: demo.hello'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {t('demo.date') || 'Date'}
            </h3>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-mono text-sm">{formatDate(demoDate)}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              {t('demo.currency') || 'Currency'}
            </h3>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-mono text-sm">{formatCurrency(demoAmount)}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium flex items-center gap-1">
              <Users className="w-4 h-4" />
              {t('demo.number') || 'Number'}
            </h3>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-mono text-sm">{formatNumber(demoNumber)}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">
            {t('demo.rtlSupport') || 'RTL Support'}
          </h3>
          <div 
            className={`p-4 rounded-lg border ${isRTL ? 'bg-destructive/10 border-destructive/20' : 'bg-muted'}`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <p className={textAlign('start')}>
              {isRTL 
                ? (t('demo.rtlActive') || 'This text is right-aligned in RTL mode.')
                : (t('demo.rtlInactive') || 'This text is left-aligned in LTR mode.')}
              
            </p>
            <p className={`text-sm mt-2 ${textAlign('end')} text-muted-foreground`}>
              {t('demo.alignmentNote') || 'Notice the text alignment changes with language direction.'}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            {t('demo.instructions') || 'Try changing the language using the toggle in the header.'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguageDemo;
