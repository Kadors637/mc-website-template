import React, { useState } from 'react';
import { MainNav } from "@/components/ui/main-nav";

interface Group {
  id: string;
  name: string;
  boostDuration: number;
  members: string[];
}

export default function AdminGroups() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [newGroup, setNewGroup] = useState({
    name: '',
    boostDuration: 30, // varsayılan 30 gün
  });

  const handleAddGroup = () => {
    const group: Group = {
      id: Date.now().toString(),
      name: newGroup.name,
      boostDuration: newGroup.boostDuration,
      members: []
    };
    setGroups([...groups, group]);
    setNewGroup({ name: '', boostDuration: 30 });
  };

  const handleAddMember = (groupId: string, memberId: string) => {
    setGroups(groups.map(group => {
      if (group.id === groupId) {
        return {
          ...group,
          members: [...group.members, memberId]
        };
      }
      return group;
    }));
  };

  return (
    <div className="min-h-screen bg-black">
      <MainNav />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Grup Yönetimi</h1>

          {/* Yeni Grup Ekleme */}
          <div className="bg-white/5 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Yeni Grup Ekle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Grup Adı
                </label>
                <input
                  type="text"
                  value={newGroup.name}
                  onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                  placeholder="Grup adını girin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Boost Süresi (Gün)
                </label>
                <input
                  type="number"
                  value={newGroup.boostDuration}
                  onChange={(e) => setNewGroup({ ...newGroup, boostDuration: parseInt(e.target.value) })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                  min="1"
                />
              </div>
            </div>
            <button
              onClick={handleAddGroup}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Grup Ekle
            </button>
          </div>

          {/* Gruplar Listesi */}
          <div className="space-y-6">
            {groups.map(group => (
              <div key={group.id} className="bg-white/5 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{group.name}</h3>
                  <span className="text-sm text-gray-400">
                    Boost Süresi: {group.boostDuration} gün
                  </span>
                </div>

                {/* Üye Ekleme */}
                <div className="mb-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="Discord ID"
                      className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                    />
                    <button
                      onClick={() => handleAddMember(group.id, 'test-id')}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Üye Ekle
                    </button>
                  </div>
                </div>

                {/* Üyeler Listesi */}
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Üyeler</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {group.members.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-2"
                      >
                        <span className="text-white">{member}</span>
                        <button
                          onClick={() => {
                            setGroups(groups.map(g => {
                              if (g.id === group.id) {
                                return {
                                  ...g,
                                  members: g.members.filter(m => m !== member)
                                };
                              }
                              return g;
                            }));
                          }}
                          className="text-red-500 hover:text-red-400"
                        >
                          Kaldır
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 