import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';

// ถ้าข้อมูลอยู่ในไฟล์ portfolioData ให้ import มาแทน
// import { salesData, categoryData } from '../../data/portfolioData';

// แต่ถ้าจะใส่ไว้ในนี้ ให้ใส่ export default ไว้ที่ฟังก์ชันด้านล่างครับ
const salesData = [
  { month: 'Jan', revenue: 45000, target: 40000 },
  { month: 'Feb', revenue: 52000, target: 45000 },
  { month: 'Mar', revenue: 48000, target: 47000 },
  { month: 'Apr', revenue: 61000, target: 50000 },
  { month: 'May', revenue: 55000, target: 52000 },
  { month: 'Jun', revenue: 67000, target: 55000 },
];

const categoryData = [
  { name: 'Product A', value: 400, color: '#0088FE' },
  { name: 'Product B', value: 300, color: '#00C49F' },
  { name: 'Product C', value: 200, color: '#FFBB28' },
  { name: 'Product D', value: 100, color: '#FF8042' },
];

export default function DashboardShowcase({ salesData }: { salesData: any[] }) {  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl mb-4">Dashboard Showcase</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sales Performance Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl mb-4">Sales Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#3b82f6" />
                <Bar dataKey="target" fill="#e5e7eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Product Distribution Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl mb-4">Product Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}