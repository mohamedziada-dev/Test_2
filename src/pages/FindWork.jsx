import { useState } from "react";

export default function FindWork() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [savedJobs, setSavedJobs] = useState([2]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const [jobs] = useState([
    {
      id: 1,
      title: "Senior Frontend Engineer (React / Next.js)",
      company: "Noon Digital",
      verified: true,
      location: "Cairo, Egypt (Hybrid)",
      type: "Full-time",
      category: "Engineering",
      salary: "45,000 - 65,000 EGP / mo",
      postedAt: "2 days ago",
      applicants: 42,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      description:
        "We are looking for an experienced Frontend Engineer to architect scalable e-commerce interfaces, optimize Core Web Vitals, and collaborate with cross-functional product teams.",
      requirements: [
        "4+ years of production experience with React and TypeScript.",
        "Strong understanding of state management, REST/GraphQL APIs, and web performance.",
        "Experience building accessible, responsive design systems."
      ]
    },
    {
      id: 2,
      title: "Product UI/UX Designer",
      company: "Paymob",
      verified: true,
      location: "Maadi, Cairo (On-site)",
      type: "Full-time",
      category: "Design",
      salary: "30,000 - 42,000 EGP / mo",
      postedAt: "5 hours ago",
      applicants: 19,
      skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
      description:
        "Lead the end-to-end user experience for next-generation fintech payment gateways and merchant dashboards across the MENA region.",
      requirements: [
        "3+ years designing B2B or consumer fintech products.",
        "Mastery of Figma, auto-layout, and interactive prototyping.",
        "Strong portfolio demonstrating problem-solving and usability testing."
      ]
    },
    {
      id: 3,
      title: "Backend Node.js Developer",
      company: "Bosta",
      verified: true,
      location: "Remote (MENA)",
      type: "Full-time",
      category: "Engineering",
      salary: "40,000 - 55,000 EGP / mo",
      postedAt: "1 day ago",
      applicants: 64,
      skills: ["Node.js", "PostgreSQL", "Docker", "Microservices"],
      description:
        "Build high-throughput logistics tracking APIs and real-time fleet routing services handling hundreds of thousands of daily deliveries.",
      requirements: [
        "3+ years building distributed backend systems with Node.js.",
        "Solid experience with relational databases, Redis caching, and message queues.",
        "Familiarity with AWS or GCP cloud deployments."
      ]
    },
    {
      id: 4,
      title: "Data Analyst & BI Specialist",
      company: "Instabug",
      verified: true,
      location: "Remote",
      type: "Contract",
      category: "Data",
      salary: "$1,800 - $2,400 / mo",
      postedAt: "3 days ago",
      applicants: 28,
      skills: ["SQL", "Python", "Looker", "Product Analytics"],
      description:
        "Transform raw product telemetry into actionable executive dashboards to guide user retention and enterprise growth strategies.",
      requirements: [
        "Strong proficiency in SQL and Python (Pandas).",
        "Experience with BI visualization tools such as Looker, Tableau, or PowerBI.",
        "Ability to communicate complex statistical findings clearly."
      ]
    },
    {
      id: 5,
      title: "Technical Content & SEO Strategist",
      company: "Robusta Studio",
      verified: false,
      location: "New Cairo (Hybrid)",
      type: "Part-time",
      category: "Marketing",
      salary: "15,000 - 22,000 EGP / mo",
      postedAt: "4 days ago",
      applicants: 31,
      skills: ["Technical Writing", "SEO", "B2B SaaS", "Content Strategy"],
      description:
        "Craft authoritative technical whitepapers, case studies, and organic search campaigns for international software clients.",
      requirements: [
        "Proven track record in B2B tech or SaaS content marketing.",
        "Deep understanding of on-page SEO and keyword intent.",
        "Native-level English writing and editing skills."
      ]
    },
    {
      id: 6,
      title: "DevOps & Cloud Infrastructure Engineer",
      company: "Fawry",
      verified: true,
      location: "Smart Village, Giza",
      type: "Full-time",
      category: "Engineering",
      salary: "50,000 - 70,000 EGP / mo",
      postedAt: "Just now",
      applicants: 11,
      skills: ["Kubernetes", "Terraform", "AWS", "CI/CD"],
      description:
        "Manage mission-critical banking and payment infrastructure with 99.99% uptime SLA, automated deployments, and strict security compliance.",
      requirements: [
        "Hands-on experience with Kubernetes, Terraform, and Linux administration.",
        "Experience implementing PCI-DSS or ISO-27001 security standards.",
        "Strong scripting skills in Bash or Python."
      ]
    }
  ]);

  const categories = ["All", "Engineering", "Design", "Data", "Marketing"];
  const jobTypes = ["All", "Full-time", "Part-time", "Contract"];

  const toggleSaveJob = (id) => {
    setSavedJobs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleApply = (id) => {
    if (!appliedJobs.includes(id)) {
      setAppliedJobs((prev) => [...prev, id]);
    }
    setSelectedJob(null);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;
    const matchesType = selectedType === "All" || job.type === selectedType;

    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              W
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              WorkPortal<span className="text-blue-600">.</span>
            </span>
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 ml-2">
              Official Verified Board
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
            <span>Saved ({savedJobs.length})</span>
            <span className="text-slate-300">|</span>
            <span className="text-blue-600">Applied ({appliedJobs.length})</span>
          </div>
        </div>
      </header>

      {/* Hero & Search Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Find Verified Career Opportunities
            </h1>
            <p className="mt-2 text-base text-slate-600">
              Browse accredited roles from vetted companies with transparent salary ranges and direct hiring pipelines.
            </p>
          </div>

          {/* Search & Filters Bar */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-6 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by job title, skill (e.g. React, SQL), or company..."
                className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 text-xs font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3.5 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "All" ? "All Departments" : cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3.5 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "All" ? "All Employment Types" : type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-600">
            Showing <span className="font-semibold text-slate-900">{filteredJobs.length}</span> verified positions
          </p>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
            <h3 className="text-lg font-semibold text-slate-900">No matching jobs found</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try adjusting your search keywords or resetting the department filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedType("All");
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => {
              const isSaved = savedJobs.includes(job.id);
              const isApplied = appliedJobs.includes(job.id);

              return (
                <div
                  key={job.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition flex flex-col justify-between"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-semibold text-slate-700">
                            {job.company}
                          </span>
                          {job.verified && (
                            <span
                              title="Verified Employer"
                              className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200"
                            >
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <h2 className="text-lg font-bold text-slate-900 mt-1 leading-snug">
                          {job.title}
                        </h2>
                      </div>

                      <button
                        onClick={() => toggleSaveJob(job.id)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition ${
                          isSaved
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {isSaved ? "Saved" : "Save"}
                      </button>
                    </div>

                    {/* Meta Badges */}
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium">
                        {job.location}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium">
                        {job.type}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-semibold">
                        {job.salary}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      {job.postedAt} • {job.applicants} applicants
                    </div>

                    <button
                      onClick={() => setSelectedJob(job)}
                      disabled={isApplied}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                        isApplied
                          ? "bg-emerald-100 text-emerald-800 cursor-default"
                          : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                      }`}
                    >
                      {isApplied ? "Applied ✓" : "View & Apply"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Job Details & Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl border border-slate-200">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-blue-600">
                    {selectedJob.company}
                  </span>
                  {selectedJob.verified && (
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                      ✓ Official Accredited Employer
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {selectedJob.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {selectedJob.location} • {selectedJob.type} • {selectedJob.salary}
                </p>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold px-2 py-1"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-5">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Role Overview
                </h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {selectedJob.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Key Requirements
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-600 list-disc pl-5">
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Required Skills
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-800 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedJob(null)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleApply(selectedJob.id)}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition"
              >
                Submit Official Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}