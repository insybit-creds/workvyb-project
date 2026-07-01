import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ENQUIRY_FORM } from '@/constants/testIds/workvyb';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  email: z.string().trim().email('Enter a valid email address'),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  company: z.string().trim().min(2, 'Please enter your company name'),
  roles: z.string().trim().min(2, 'Please tell us which roles you are hiring for'),
});

/**
 * Reusable hiring enquiry form.
 * `variant` controls the data-testid prefix so the same component can be
 * rendered inside the hero section and again near the bottom of the page.
 *
 * Submits to POST /api/leads/notify which sends an email notification to the
 * Workvyb team (no database persistence — low lead volume, email is enough).
 */
const EnquiryForm = ({ variant = 'hero' }) => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(enquirySchema) });

  const onSubmit = async (data) => {
    try {
      await axios.post(`${API}/leads/notify`, data);
      setSubmitted(true);
      reset();
      toast({
        title: 'Enquiry received',
        description: 'Workvyb will contact you shortly regarding your hiring requirement.',
      });
    } catch (error) {
      console.error('Failed to submit hiring enquiry:', error);
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: 'Could not submit your requirement right now. Please try again or reach us on WhatsApp.',
      });
    }
  };

  if (submitted) {
    return (
      <div
        data-testid={ENQUIRY_FORM.success(variant)}
        className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-12 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-emerald-600" strokeWidth={1.5} />
        <p className="text-lg font-semibold text-slate-900">
          Thank you! Workvyb will contact you shortly regarding your hiring requirement.
        </p>
        <Button
          variant="ghost"
          className="text-slate-600 hover:text-slate-900 hover:bg-white"
          onClick={() => setSubmitted(false)}
          data-testid={`${variant}-form-submit-another-button`}
        >
          Submit another requirement
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="space-y-1.5">
        <Label htmlFor={`${variant}-name`} className="text-sm font-medium text-slate-700">
          Name
        </Label>
        <Input
          id={`${variant}-name`}
          placeholder="Your full name"
          data-testid={ENQUIRY_FORM.name(variant)}
          className="h-11 rounded-lg border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500"
          {...register('name')}
        />
        {errors.name && (
          <p data-testid={ENQUIRY_FORM.error(variant, 'name')} className="text-xs text-rose-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={`${variant}-email`} className="text-sm font-medium text-slate-700">
          Email ID
        </Label>
        <Input
          id={`${variant}-email`}
          type="email"
          placeholder="you@company.com"
          data-testid={ENQUIRY_FORM.email(variant)}
          className="h-11 rounded-lg border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500"
          {...register('email')}
        />
        {errors.email && (
          <p data-testid={ENQUIRY_FORM.error(variant, 'email')} className="text-xs text-rose-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={`${variant}-mobile`} className="text-sm font-medium text-slate-700">
          Mobile Number
        </Label>
        <Input
          id={`${variant}-mobile`}
          placeholder="10-digit mobile number"
          inputMode="numeric"
          maxLength={10}
          data-testid={ENQUIRY_FORM.mobile(variant)}
          className="h-11 rounded-lg border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500"
          {...register('mobile')}
        />
        {errors.mobile && (
          <p data-testid={ENQUIRY_FORM.error(variant, 'mobile')} className="text-xs text-rose-600">
            {errors.mobile.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={`${variant}-company`} className="text-sm font-medium text-slate-700">
          Company Name
        </Label>
        <Input
          id={`${variant}-company`}
          placeholder="Your company name"
          data-testid={ENQUIRY_FORM.company(variant)}
          className="h-11 rounded-lg border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500"
          {...register('company')}
        />
        {errors.company && (
          <p data-testid={ENQUIRY_FORM.error(variant, 'company')} className="text-xs text-rose-600">
            {errors.company.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={`${variant}-roles`} className="text-sm font-medium text-slate-700">
          Roles for which you are hiring
        </Label>
        <Input
          id={`${variant}-roles`}
          placeholder="e.g. Product Manager, B2B Sales"
          data-testid={ENQUIRY_FORM.roles(variant)}
          className="h-11 rounded-lg border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500"
          {...register('roles')}
        />
        {errors.roles && (
          <p data-testid={ENQUIRY_FORM.error(variant, 'roles')} className="text-xs text-rose-600">
            {errors.roles.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        data-testid={ENQUIRY_FORM.submit(variant)}
        className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-base font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition-all hover:bg-blue-500 hover:shadow-[0_8px_28px_rgba(37,99,235,0.35)] disabled:opacity-70"
      >
        {isSubmitting ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        Submit Hiring Requirement
      </Button>
      <p className="text-center text-xs leading-relaxed text-slate-500">
        Our team will get in touch with you to understand your hiring needs and suggest the next steps.
      </p>
    </form>
  );
};

export default EnquiryForm;
