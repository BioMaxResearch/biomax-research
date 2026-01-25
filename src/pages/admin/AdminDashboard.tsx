import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Package, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    trending: 'up',
    icon: DollarSign,
  },
  {
    title: 'Orders',
    value: '356',
    change: '+15.2%',
    trending: 'up',
    icon: ShoppingCart,
  },
  {
    title: 'Products',
    value: '48',
    change: '+3',
    trending: 'up',
    icon: Package,
  },
  {
    title: 'Conversion Rate',
    value: '3.2%',
    change: '-0.4%',
    trending: 'down',
    icon: TrendingUp,
  },
];

const recentOrders = [
  { id: 'ORD-001', customer: 'Dr. Smith Lab', total: '$234.50', status: 'Shipped', date: '2024-01-20' },
  { id: 'ORD-002', customer: 'Research Institute', total: '$567.00', status: 'Processing', date: '2024-01-19' },
  { id: 'ORD-003', customer: 'BioTech Corp', total: '$1,234.00', status: 'Pending', date: '2024-01-19' },
  { id: 'ORD-004', customer: 'University Lab', total: '$89.00', status: 'Delivered', date: '2024-01-18' },
  { id: 'ORD-005', customer: 'Private Research', total: '$445.50', status: 'Shipped', date: '2024-01-18' },
];

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back to BioMax Admin</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className={`flex items-center text-xs ${
                  stat.trending === 'up' ? 'text-success' : 'text-destructive'
                }`}>
                  {stat.trending === 'up' ? (
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                  )}
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Order ID</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Customer</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Total</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium">{order.id}</td>
                      <td className="py-3 px-4">{order.customer}</td>
                      <td className="py-3 px-4">{order.total}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          order.status === 'Delivered' ? 'bg-success/10 text-success' :
                          order.status === 'Shipped' ? 'bg-accent/10 text-accent' :
                          order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
