import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const PricingToggle = ({ handleToggle, weeklyPricing }) => {
    return (
        <div className="flex items-center justify-center space-x-4">
            <Label
                htmlFor="pricing-toggle"
                className="text-lg cursor-pointer">
                Monthly
            </Label>
            <Switch
                className="data-[state=unchecked]:bg-primary"
                id="pricing-toggle"
                checked={weeklyPricing}
                onCheckedChange={handleToggle}
            />
            <Label
                htmlFor="pricing-toggle"
                className="text-lg cursor-pointer">
                Weekly
            </Label>
        </div>
    );
};

export default PricingToggle;