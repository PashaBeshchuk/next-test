import BundleDiscountsSwitcher from '@/components/features/ProductConfigurator/components/BundleDiscountsSwitcher';
import CountrySelect from '@/components/ui/CountrySelect';
import PlansInclude from '@/components/features/ProductConfigurator/components/PlansInclude';
import SubscriptionCycle from '@/components/features/ProductConfigurator/components/SubscriptionCycle';
import DatacenterIcon from '@/assets/icons/DatacenterIcon';

export default function Home() {
  return (
    <div className="body2">
      <div className="p-4 bg-white rounded shadow-sm mb-4">
        <div className="flex gap-4 mb-6">
          <div>
            <DatacenterIcon />
          </div>
          <div>
            <h4 className="h4">Datacenter Proxies</h4>
            <p className="body2 text-gray-500">
              High-speed, reliable proxies sourced from data centers, ideal for managing
              high-volume, concurrent requests.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <div>
            <h5 className="subtitle2 font-bold">Select number of IPs</h5>
            <p>Choose the perfect quantity of IPs for your needs effortlessly</p>
          </div>
          <BundleDiscountsSwitcher />
        </div>
        <SubscriptionCycle />
        <div className="font-medium">
          <h5 className="font-bold">Select location</h5>
          <CountrySelect />
        </div>
      </div>
      <PlansInclude />
    </div>
  );
}
