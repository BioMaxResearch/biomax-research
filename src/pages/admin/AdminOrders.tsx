import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Eye, 
  Printer,
  MoreHorizontal,
  Package,
  Truck,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Order {
  id: string;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  items: {
    name: string;
    variant: string;
    quantity: number;
    price: number;
  }[];
  shipping: {
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'paid' | 'pending' | 'refunded';
  total: number;
  createdAt: string;
  updatedAt: string;
}

const sampleOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-2024-001',
    customer: { name: 'Dr. Sarah Johnson', email: 'sjohnson@research.edu', phone: '555-0123' },
    items: [
      { name: 'BPC-157', variant: '5mg', quantity: 2, price: 42.00 },
      { name: 'TB-500', variant: '5mg', quantity: 1, price: 58.00 },
    ],
    shipping: { address: '123 Lab Drive', city: 'Cambridge', state: 'MA', zip: '02139', country: 'USA' },
    status: 'shipped',
    paymentStatus: 'paid',
    total: 142.00,
    createdAt: '2024-01-20T10:30:00Z',
    updatedAt: '2024-01-21T14:00:00Z',
  },
  {
    id: '2',
    orderNumber: 'ORD-2024-002',
    customer: { name: 'BioTech Research Inc', email: 'orders@biotech.com', phone: '555-0456' },
    items: [
      { name: 'Semaglutide', variant: '10mg', quantity: 3, price: 229.00 },
      { name: '5-Amino-1MQ', variant: '10mg', quantity: 2, price: 110.00 },
    ],
    shipping: { address: '456 Innovation Blvd', city: 'San Diego', state: 'CA', zip: '92121', country: 'USA' },
    status: 'processing',
    paymentStatus: 'paid',
    total: 907.00,
    createdAt: '2024-01-19T15:45:00Z',
    updatedAt: '2024-01-19T15:45:00Z',
  },
  {
    id: '3',
    orderNumber: 'ORD-2024-003',
    customer: { name: 'University Lab', email: 'procurement@university.edu', phone: '555-0789' },
    items: [
      { name: 'Tirzepatide', variant: '15mg', quantity: 5, price: 249.00 },
    ],
    shipping: { address: '789 Academic Way', city: 'Boston', state: 'MA', zip: '02115', country: 'USA' },
    status: 'pending',
    paymentStatus: 'pending',
    total: 1245.00,
    createdAt: '2024-01-19T09:00:00Z',
    updatedAt: '2024-01-19T09:00:00Z',
  },
  {
    id: '4',
    orderNumber: 'ORD-2024-004',
    customer: { name: 'Private Researcher', email: 'researcher@email.com', phone: '555-0321' },
    items: [
      { name: 'Epithalon', variant: '50mg', quantity: 1, price: 180.00 },
      { name: 'NAD+', variant: '500mg', quantity: 1, price: 150.00 },
    ],
    shipping: { address: '321 Home Lab St', city: 'Austin', state: 'TX', zip: '78701', country: 'USA' },
    status: 'delivered',
    paymentStatus: 'paid',
    total: 330.00,
    createdAt: '2024-01-15T11:20:00Z',
    updatedAt: '2024-01-18T16:30:00Z',
  },
  {
    id: '5',
    orderNumber: 'ORD-2024-005',
    customer: { name: 'Pharma Labs', email: 'orders@pharmalabs.com', phone: '555-0654' },
    items: [
      { name: 'BPC-157', variant: '10mg', quantity: 10, price: 62.00 },
    ],
    shipping: { address: '654 Pharma Park', city: 'New Jersey', state: 'NJ', zip: '07102', country: 'USA' },
    status: 'cancelled',
    paymentStatus: 'refunded',
    total: 620.00,
    createdAt: '2024-01-14T08:00:00Z',
    updatedAt: '2024-01-14T10:00:00Z',
  },
];

const statusConfig = {
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800', icon: Clock },
  processing: { label: 'Processing', color: 'bg-blue-100 text-blue-800', icon: Package },
  shipped: { label: 'Shipped', color: 'bg-accent/10 text-accent', icon: Truck },
  delivered: { label: 'Delivered', color: 'bg-success/10 text-success', icon: CheckCircle },
  cancelled: { label: 'Cancelled', color: 'bg-destructive/10 text-destructive', icon: XCircle },
};

const paymentStatusConfig = {
  paid: { label: 'Paid', color: 'bg-success/10 text-success' },
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
  refunded: { label: 'Refunded', color: 'bg-muted text-muted-foreground' },
};

const AdminOrders = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = sampleOrders.filter(order => {
    const matchesSearch = order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.customer.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Orders</h1>
          <p className="text-muted-foreground mt-1">Manage customer orders and fulfillment</p>
        </div>

        {/* Order Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(statusConfig).map(([key, config]) => {
            const count = sampleOrders.filter(o => o.status === key).length;
            return (
              <Card key={key} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setStatusFilter(key)}>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{config.label}</p>
                      <p className="text-2xl font-bold">{count}</p>
                    </div>
                    <config.icon className={`h-8 w-8 ${config.color.split(' ')[1]}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4">
              <div className="relative flex-1 min-w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search by order number, customer name, or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-border rounded-md px-4 py-2 bg-background min-w-48"
              >
                <option value="all">All Statuses</option>
                {Object.entries(statusConfig).map(([key, config]) => (
                  <option key={key} value={key}>
                    {config.label}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>Orders ({filteredOrders.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Order</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Customer</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Items</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Total</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Payment</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => {
                    const StatusIcon = statusConfig[order.status].icon;
                    return (
                      <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <p className="font-medium text-accent">{order.orderNumber}</p>
                        </td>
                        <td className="py-3 px-4">
                          <p className="font-medium">{order.customer.name}</p>
                          <p className="text-xs text-muted-foreground">{order.customer.email}</p>
                        </td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted">
                            {order.items.reduce((acc, item) => acc + item.quantity, 0)} items
                          </span>
                        </td>
                        <td className="py-3 px-4 font-bold">${order.total.toFixed(2)}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${paymentStatusConfig[order.paymentStatus].color}`}>
                            {paymentStatusConfig[order.paymentStatus].label}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[order.status].color}`}>
                            <StatusIcon size={12} />
                            {statusConfig[order.status].label}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">
                          {formatDate(order.createdAt)}
                        </td>
                        <td className="py-3 px-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal size={16} />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => setSelectedOrder(order)}>
                                <Eye size={14} className="mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Printer size={14} className="mr-2" />
                                Print Invoice
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Truck size={14} className="mr-2" />
                                Update Tracking
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {filteredOrders.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No orders found</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Order Detail Modal */}
        <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Order {selectedOrder?.orderNumber}</DialogTitle>
            </DialogHeader>
            {selectedOrder && (
              <div className="space-y-6">
                {/* Customer Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Customer Information</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>{selectedOrder.customer.name}</p>
                      <p>{selectedOrder.customer.email}</p>
                      <p>{selectedOrder.customer.phone}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Shipping Address</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>{selectedOrder.shipping.address}</p>
                      <p>{selectedOrder.shipping.city}, {selectedOrder.shipping.state} {selectedOrder.shipping.zip}</p>
                      <p>{selectedOrder.shipping.country}</p>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Order Items</h4>
                  <div className="border border-border rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-muted">
                        <tr>
                          <th className="text-left py-2 px-4">Product</th>
                          <th className="text-left py-2 px-4">Variant</th>
                          <th className="text-center py-2 px-4">Qty</th>
                          <th className="text-right py-2 px-4">Price</th>
                          <th className="text-right py-2 px-4">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedOrder.items.map((item, index) => (
                          <tr key={index} className="border-t border-border">
                            <td className="py-2 px-4">{item.name}</td>
                            <td className="py-2 px-4">{item.variant}</td>
                            <td className="py-2 px-4 text-center">{item.quantity}</td>
                            <td className="py-2 px-4 text-right">${item.price.toFixed(2)}</td>
                            <td className="py-2 px-4 text-right font-medium">${(item.price * item.quantity).toFixed(2)}</td>
                          </tr>
                        ))}
                        <tr className="border-t border-border bg-muted/50">
                          <td colSpan={4} className="py-2 px-4 text-right font-bold">Total:</td>
                          <td className="py-2 px-4 text-right font-bold text-accent">${selectedOrder.total.toFixed(2)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Status Update */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-sm text-muted-foreground mr-2">Update Status:</span>
                    <select className="border border-border rounded-md px-3 py-1.5 text-sm bg-background">
                      {Object.entries(statusConfig).map(([key, config]) => (
                        <option key={key} value={key} selected={key === selectedOrder.status}>
                          {config.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Save Changes
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default AdminOrders;
