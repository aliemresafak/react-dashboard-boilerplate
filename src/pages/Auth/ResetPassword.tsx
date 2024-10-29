import { Button } from "@/core/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/core/components/ui/card";
import { Input } from "@/core/components/ui/input";
import { Label } from "@/core/components/ui/label";
import URLS from "@/core/urls";
import { Link } from "react-router-dom";

const ResetPasswordPage = () => {
  return (
    <div className="h-dvh flex items-center ">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Forgot your password?</CardTitle>
          <CardDescription>
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mx-auto w-full max-w-md space-y-4">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <Label htmlFor="email" className="sr-only">
                  Email address
                </Label>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                />
              </div>
              <Button type="submit" className="w-full">
                Reset password
              </Button>
            </form>
            <div className="flex justify-center">
              <Link
                to={URLS.SIGNIN}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Back to login
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordPage;
